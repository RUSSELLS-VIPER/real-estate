import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Role } from "../models/user.model";
import { JwtPayloadData } from "../types";
import { logError } from "../utils/error";

export interface AuthenticatedRequest extends Request {
    user?: JwtPayloadData;
}

export const authenticate = (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) => {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
        return res.status(500).json({ message: "Server config error: JWT_SECRET is missing" });
    }

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Unauthorized: token missing" });
    }

    const token = authHeader.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : authHeader.trim();

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: token missing" });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret) as JwtPayloadData;
        req.user = {
            id: decoded.id,
            role: decoded.role
        };
        next();
    } catch (error) {
        logError("authenticate", error);
        return res.status(401).json({ message: "Unauthorized: invalid token" });
    }
};

export const authorize = (...roles: Role[]) => {
    return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden: insufficient role" });
        }

        next();
    };
};
