import express from "express";
import {
    createProperty,
    deleteProperty,
    getProperties,
    getPropertyById,
    updateProperty
} from "../controllers/property.controller";
import { authenticate, authorize } from "../middleware/auth.middleware";
import { Role } from "../models/user.model";

const router = express.Router();

router.get("/", getProperties);
router.get("/:id", getPropertyById);

router.post("/", authenticate, authorize(Role.AGENT, Role.ADMIN), createProperty);
router.put("/:id", authenticate, authorize(Role.AGENT, Role.ADMIN), updateProperty);
router.delete("/:id", authenticate, authorize(Role.AGENT, Role.ADMIN), deleteProperty);

export default router;
