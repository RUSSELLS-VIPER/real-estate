import nodemailer from "nodemailer";

export const sendEmail = async (to: string, subject: string, text: string) => {
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER || process.env.EMAIL;
    const rawPassword = process.env.SMTP_PASSWORD || process.env.EMAIL_PASS || "";
    const pass = rawPassword.replace(/\s+/g, "");
    const from = process.env.EMAIL_FROM || user;

    if (!user || !pass) {
        throw new Error("SMTP credentials missing. Set SMTP_USER and SMTP_PASSWORD in .env");
    }

    const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        connectionTimeout: Number(process.env.SMTP_TIMEOUT_MS || 10000),
        auth: {
            user,
            pass
        }
    });

    try {
        await transporter.sendMail({
            from,
            to,
            subject,
            text
        });
    } catch (error: any) {
        if (error?.code === "EAUTH") {
            throw new Error("SMTP authentication failed. Check SMTP_USER and SMTP_PASSWORD (Gmail app password).");
        }
        throw error;
    }
};
