import { Response } from "express";
import mongoose from "mongoose";
import Property from "../models/property.model";
import { Role } from "../models/user.model";
import { AuthenticatedRequest } from "../middleware/auth.middleware";

const parseError = (error: unknown) => {
    if (error instanceof mongoose.Error.ValidationError) {
        return {
            message: "Validation failed",
            details: Object.values(error.errors).map((e) => e.message)
        };
    }
    if (error instanceof mongoose.Error.CastError) {
        return {
            message: `Invalid value for ${error.path}`,
            details: error.message
        };
    }
    if (error instanceof Error) {
        return { message: error.message };
    }
    return { message: "Internal server error" };
};

const toSafePropertyResponse = (property: any) => {
    const obj = property.toObject ? property.toObject() : property;
    const hasImageBuffer = Boolean(obj?.image?.data && Buffer.isBuffer(obj.image.data));

    return {
        ...obj,
        image: hasImageBuffer
            ? `data:${obj.image.contentType};base64,${obj.image.data.toString("base64")}`
            : null,
        likesCount: Array.isArray(obj?.likes) ? obj.likes.length : 0
    };
};

export const createProperty = async (req: AuthenticatedRequest, res: Response) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        if (!mongoose.Types.ObjectId.isValid(req.user.id)) {
            return res.status(400).json({ message: "Invalid user id in token" });
        }

        // Some clients send empty image text field in multipart form-data.
        if (req.body.image === "") {
            delete req.body.image;
        }

        const { title, description, price, address } = req.body;
        const parsedPrice = Number(price);

        if (!title || !description || !address || Number.isNaN(parsedPrice)) {
            return res.status(400).json({
                message: "title, description, address and valid numeric price are required"
            });
        }

        const property = await Property.create({
            title,
            description,
            price: parsedPrice,
            address,
            createdBy: new mongoose.Types.ObjectId(req.user.id),
            image: req.file
                ? {
                      data: req.file.buffer,
                      contentType: req.file.mimetype
                  }
                : undefined
        });

        return res.status(201).json({
            message: "Property created successfully",
            property
        });
    } catch (error) {
        console.error("createProperty error:", error);
        return res.status(500).json(parseError(error));
    }
};

export const getProperties = async (_req: AuthenticatedRequest, res: Response) => {
    try {
        const properties = await Property.find().populate("createdBy", "name email role");
        return res.json(properties.map((property) => toSafePropertyResponse(property)));
    } catch (error) {
        console.error("getProperties error:", error);
        return res.status(500).json(parseError(error));
    }
};

export const getPropertyById = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const property = await Property.findById(req.params.id).populate("createdBy", "name email role");

        if (!property) {
            return res.status(404).json({ message: "Property not found" });
        }

        return res.json(toSafePropertyResponse(property));
    } catch (error) {
        console.error("getPropertyById error:", error);
        return res.status(500).json(parseError(error));
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
        const isOwner = property.createdBy && property.createdBy.toString() === req.user.id;

        if (!isAdmin && !isOwner) {
            return res.status(403).json({ message: "Forbidden: you can only update your own properties" });
        }

        const { title, description, price, address } = req.body;

        property.title = title ?? property.title;
        property.description = description ?? property.description;
        if (price !== undefined) {
            const parsedPrice = Number(price);
            if (Number.isNaN(parsedPrice)) {
                return res.status(400).json({ message: "price must be a valid number" });
            }
            property.price = parsedPrice;
        }
        property.address = address ?? property.address;
        if (req.file) {
            property.image = {
                data: req.file.buffer,
                contentType: req.file.mimetype
            };
        }

        await property.save();

        return res.json({
            message: "Property updated successfully",
            property
        });
    } catch (error) {
        console.error("updateProperty error:", error);
        return res.status(500).json(parseError(error));
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
        const isOwner = property.createdBy && property.createdBy.toString() === req.user.id;

        if (!isAdmin && !isOwner) {
            return res.status(403).json({ message: "Forbidden: you can only delete your own properties" });
        }

        await property.deleteOne();

        return res.json({ message: "Property deleted successfully" });
    } catch (error) {
        console.error("deleteProperty error:", error);
        return res.status(500).json(parseError(error));
    }
};

export const togglePropertyLike = async (req: AuthenticatedRequest, res: Response) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const property = await Property.findById(req.params.id);
        if (!property) {
            return res.status(404).json({ message: "Property not found" });
        }

        const userId = new mongoose.Types.ObjectId(req.user.id);
        const likes = Array.isArray(property.likes) ? property.likes : [];
        const existingLikeIndex = likes.findIndex((id) => id && id.toString() === req.user!.id);

        let liked = false;
        if (existingLikeIndex >= 0) {
            likes.splice(existingLikeIndex, 1);
        } else {
            likes.push(userId);
            liked = true;
        }
        property.likes = likes;

        await property.save();

        return res.json({
            message: liked ? "Property liked" : "Property unliked",
            liked,
            likesCount: property.likes.length
        });
    } catch (error) {
        console.error("togglePropertyLike error:", error);
        return res.status(500).json(parseError(error));
    }
};
