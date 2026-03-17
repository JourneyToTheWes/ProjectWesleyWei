const ConnectDB = require("./config/db");
import App from "./app";
const express = require("express");

// Controllers
import AboutController from "./controllers/AboutController";
import WorkExperienceController from "./controllers/WorkExperienceController";
import ProjectController from "./controllers/ProjectController";
import VideoController from "./controllers/VideoController";

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
    ],
    middleWares: [express.json({ extended: false })],
});

app.listen();
