import { Response } from "express";
import mongoose from "mongoose";
import Property from "../models/property.model";
import { Role } from "../models/user.model";
import { AuthenticatedRequest } from "../middleware/auth.middleware";

export const createProperty = async (req: AuthenticatedRequest, res: Response) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const { title, description, price, address } = req.body;

        const property = await Property.create({
            title,
            description,
            price,
            address,
            createdBy: new mongoose.Types.ObjectId(req.user.id)
        });

        return res.status(201).json({
            message: "Property created successfully",
            property
        });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const getProperties = async (_req: AuthenticatedRequest, res: Response) => {
    try {
        const properties = await Property.find().populate("createdBy", "name email role");
        return res.json(properties);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const getPropertyById = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const property = await Property.findById(req.params.id).populate("createdBy", "name email role");

        if (!property) {
            return res.status(404).json({ message: "Property not found" });
        }

        return res.json(property);
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const updateProperty = async (req: AuthenticatedRequest, res: Response) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: "Property not found" });
        }

        const isAdmin = req.user.role === Role.ADMIN;
        const isOwner = property.createdBy.toString() === req.user.id;

        if (!isAdmin && !isOwner) {
            return res.status(403).json({ message: "Forbidden: you can only update your own properties" });
        }

        const { title, description, price, address } = req.body;

        property.title = title ?? property.title;
        property.description = description ?? property.description;
        property.price = price ?? property.price;
        property.address = address ?? property.address;

        await property.save();

        return res.json({
            message: "Property updated successfully",
            property
        });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

export const deleteProperty = async (req: AuthenticatedRequest, res: Response) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: "Property not found" });
        }

        const isAdmin = req.user.role === Role.ADMIN;
        const isOwner = property.createdBy.toString() === req.user.id;

        if (!isAdmin && !isOwner) {
            return res.status(403).json({ message: "Forbidden: you can only delete your own properties" });
        }

        await property.deleteOne();

        return res.json({ message: "Property deleted successfully" });
    } catch (error) {
        return res.status(500).json({ error });
    }
};
