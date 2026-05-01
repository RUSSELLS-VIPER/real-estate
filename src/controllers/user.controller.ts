import { Response } from "express";
import mongoose from "mongoose";
import User, { Role } from "../models/user.model";
import Property from "../models/property.model";
import { AuthenticatedRequest } from "../middleware/auth.middleware";
import { logError, toErrorResponse } from "../utils/error";

/**
 * @desc Get User Profile
 * @route GET /api/users/profile/:id
 */
export const getUserProfile = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const user = await User.findById(req.params.id).select("-password -otp -otpExpiry");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.json(user);
    } catch (error) {
        logError("getUserProfile", error);
        return res.status(500).json(toErrorResponse(error));
    }
};

/**
 * @desc Update Profile (Name, Email, and Profile Picture)
 * @route PUT /api/users/profile/update
 */
export const updateUserProfile = async (req: AuthenticatedRequest, res: Response) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const { name, email } = req.body;

        if (name) user.name = name;
        if (email) user.email = email;

        // If a file was uploaded via uploadCheck middleware
        if (req.file) {
            user.profilePic = {
                data: req.file.buffer,
                contentType: req.file.mimetype
            };
        }

        await user.save();

        return res.json({
            message: "Profile updated successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
    } catch (error) {
        logError("updateUserProfile", error);
        return res.status(500).json(toErrorResponse(error));
    }
};

/**
 * @desc Toggle Property Favorite (Like System)
 * @route POST /api/users/favorites/:propertyId
 */
export const toggleFavoriteProperty = async (req: AuthenticatedRequest, res: Response) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const { propertyId } = req.params;
        const userId = new mongoose.Types.ObjectId(req.user.id);

        const property = await Property.findById(propertyId);
        if (!property) {
            return res.status(404).json({ message: "Property not found" });
        }

        const isLiked = property.likes.includes(userId);

        if (!isLiked) {
            property.likes.push(userId);
            await property.save();
            return res.json({ message: "Property added to favorites", isLiked: true });
        } else {
            property.likes = property.likes.filter(id => id.toString() !== userId.toString());
            await property.save();
            return res.json({ message: "Property removed from favorites", isLiked: false });
        }
    } catch (error) {
        logError("toggleFavoriteProperty", error);
        return res.status(500).json(toErrorResponse(error));
    }
};

/**
 * @desc Get Logged-in User's Favorite Listings
 * @route GET /api/users/favorites/my-list
 */
export const getUserFavorites = async (req: AuthenticatedRequest, res: Response) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const userId = new mongoose.Types.ObjectId(req.user.id);

        // Fetch properties where this user is in the likes array
        const favorites = await Property.find({ likes: userId })
            .select("-images.data") // Don't send raw buffers in lists
            .populate("createdBy", "name email");

        return res.json(favorites);
    } catch (error) {
        logError("getUserFavorites", error);
        return res.status(500).json(toErrorResponse(error));
    }
};



