const ConnectDB = require("./config/db");
import App from "./app";
import dotenv from "dotenv"; // Load environment variables
dotenv.config();
const express = require("express");

// Controllers
import AboutController from "./controllers/AboutController";
import WorkExperienceController from "./controllers/WorkExperienceController";
import ProjectController from "./controllers/ProjectController";
import VideoController from "./controllers/VideoController";
import SiteConfigController from "./controllers/SiteConfigController";

// Connect Database
ConnectDB();

// Initialize App
const app = new App({
    port: process.env.PORT || 5000,
    controllers: [
        new AboutController(),
        new WorkExperienceController(),
        new ProjectController(),
        new VideoController(),
        new SiteConfigController(),
    ],
    middleWares: [express.json({ extended: false })],
});

// Only run app.listen() if we are NOT on Vercel
if (process.env.NODE_ENV !== 'production') {
    app.listen();
}

export default app.app;
