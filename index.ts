import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import swaggerUi from "swagger-ui-express";
import multer from "multer";
import type { NextFunction, Request, Response } from "express";

import authRoutes from "./src/routes/auth.routes";
import propertyRoutes from "./src/routes/property.routes";
import userRoutes from "./src/routes/user.routes";
import { swaggerSpec } from "./src/config/swagger";

dotenv.config();

process.on("uncaughtException", (error) => {
    console.error("[uncaughtException]", error);
});

process.on("unhandledRejection", (reason) => {
    console.error("[unhandledRejection]", reason);
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "src", "views"));

app.get("/", (_req, res) => {
    res.render("api-tester");
});
app.get("/api-docs.json", (_req, res) => {
    res.json(swaggerSpec);
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/auth", authRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/users", userRoutes);

app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
    console.error("Unhandled error:", err);

    if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
            return res.status(400).json({ message: "Image too large. Max allowed size is 5MB." });
        }
        return res.status(400).json({ message: `Upload error: ${err.message}` });
    }

    if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
    }

    return res.status(500).json({ message: "Internal server error" });
});

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI as string)
    .then(() => {
        console.log("✅ MongoDB Connected");

        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ DB Connection Error:", err);
    });
