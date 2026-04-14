import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import swaggerUi from "swagger-ui-express";

import authRoutes from "./src/routes/auth.routes";
import propertyRoutes from "./src/routes/property.routes";
import { swaggerSpec } from "./src/config/swagger";

dotenv.config();

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
