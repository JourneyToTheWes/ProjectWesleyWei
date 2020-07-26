const ConnectDB = require('./config/db');
import App from './app';
const express = require('express');

// Controllers
import ResumeController from './controllers/ResumeController';
import ProjectController from './controllers/ProjectController';

// Connect Database
ConnectDB();

// Initialize App
const app = new App({
	port: process.env.PORT || 5000,
	controllers: [new ResumeController(), new ProjectController()],
	middleWares: [express.json({ extended: false })],
});

app.listen();
