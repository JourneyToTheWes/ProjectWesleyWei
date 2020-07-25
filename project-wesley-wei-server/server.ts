const ConnectDB = require('./config/db');
import App from './app';
const express = require('express');

// Connect Database
ConnectDB();

// Initialize App
const app = new App({
    port: process.env.PORT || 5000,
    controllers: [],
    middleWares: [
        express.json({ extended: false})
    ]
});

app.listen();

