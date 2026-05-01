import express from "express";
import {
    createProperty,
    deleteProperty,
    getProperties,
    getPropertyById,
    togglePropertyLike,
    updateProperty
} from "../controllers/property.controller";
import { authenticate, authorize } from "../middleware/auth.middleware";
import { upload } from "../middleware/upload.middleware";
import { Role } from "../models/user.model";

const router = express.Router();

router.get("/", getProperties);
router.get("/:id", getPropertyById);

router.post("/", authenticate, authorize(Role.AGENT, Role.ADMIN), upload.single("image"), createProperty);
router.put("/:id", authenticate, authorize(Role.AGENT, Role.ADMIN), upload.single("image"), updateProperty);
router.delete("/:id", authenticate, authorize(Role.AGENT, Role.ADMIN), deleteProperty);
router.post("/:id/like", authenticate, togglePropertyLike);

export default router;
