const express = require('express');
const connectToDB = require('./config/db');

const app = express();

// Connect Database
connectToDB();