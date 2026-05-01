import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User, { Role } from "../models/user.model";
import { generateOTP } from "../utils/generateOTP";
import { sendEmail } from "../utils/sendEmail";

const allowedRoles = Object.values(Role);


export const register = async (req: Request, res: Response) => {
    try {
        const { name, email, password, role } = req.body;

        if (role && !allowedRoles.includes(role)) {
            return res.status(400).json({ message: "Invalid role. Allowed roles: user, agent, admin" });
        }

        const selectedRole: Role = role || Role.USER;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const otp = generateOTP();

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            role: selectedRole,
            otp,
            otpExpiry: new Date(Date.now() + 10 * 60 * 1000)
        });

        try {
            await sendEmail(email, "Verify Email", `Your OTP is ${otp}`);
        } catch (mailError: any) {
            await user.deleteOne();
            return res.status(500).json({
                message: "Could not send verification email",
                error: mailError?.message || "Unknown email error"
            });
        }

        res.status(201).json({
            message: "Registered successfully. Verify email.",
            userId: user._id
        });

    } catch (error) {
        res.status(500).json({ error });
    }
};


export const verifyEmail = async (req: Request, res: Response) => {
    try {
        const { email, otp } = req.body;

        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({ message: "User not found" });

        if (user.otp !== otp || user.otpExpiry! < new Date()) {
            return res.status(400).json({ message: "Invalid or expired OTP" });
        }

        user.isVerified = true;
        await user.updateOne({
            isVerified: true,
            $unset: { otp: 1, otpExpiry: 1 }
        });

        res.json({ message: "Email verified successfully" });

    } catch (error) {
        res.status(500).json({ error });
    }
};


export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const jwtSecret = process.env.JWT_SECRET;

        if (!jwtSecret) {
            return res.status(500).json({ message: "Server config error: JWT_SECRET is missing" });
        }

        const user = await User.findOne({ email });

        if (!user) return res.status(404).json({ message: "User not found" });

        if (!user.isVerified) {
            return res.status(400).json({ message: "Verify your email first" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign(
            { id: user._id, role: user.role },
            jwtSecret,
            { expiresIn: "7d" }
        );

        res.json({
            message: "Login successful",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });

    } catch (error) {
        const message = error instanceof Error ? error.message : "Internal Server Error";
        res.status(500).json({ message });
    }
};



export const forgotPassword = async (req: Request, res: Response) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // 1. Generate 6-digit OTP
        const otp = generateOTP();
        const otpExpiry = new Date(Date.now() + 10 * 60000); // 10 minutes from now


        // Save OTP directly to the User document
        user.otp = otp;
        user.otpExpiry = otpExpiry;
        await user.save();

        // 3. Attempt to send the email
        try {
            await sendEmail(email, "Password Reset OTP", `Your OTP for resetting your password is: ${otp}`);
        } catch (mailError: any) {
            return res.status(400).json({
                message: "Could not send email",
                error: mailError?.message || "Unknown email error"
            });
        }

        return res.status(200).json(
            {
                message: "OTP sent to email",
                email: email,
                // otp: otp,
                // expiresAt: new Date(Date.now() + 10 * 60000)
            }
        );
    } catch (error) {
        const message = error instanceof Error ? error.message : "Internal Server Error";
        return res.status(500).json({ message });
    }
};

export const resetPassword = async (req: Request, res: Response) => {
    try {
        const { email, otp, newPassword } =  req.body;

        if (!email || !otp || !newPassword) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        // 2. heck if OTP exists and matches and Check if OTP has expired
        if (!user.otp || user.otp !== otp || !user.otpExpiry || user.otpExpiry < new Date()) {
            return res.status(400).json({ message: "Invalid or expired OTP" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);


        // 1. Modify the object in memory
        user.password = hashedPassword;
        user.otp = undefined;       // Setting to undefined tells Mongoose to $unset this
        user.otpExpiry = undefined;
        
        await user.save();

        return res.status(200).json({ message: "Password reset successful. You can now login." });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Internal Server Error";
        return res.status(500).json({ message });
    }
};
