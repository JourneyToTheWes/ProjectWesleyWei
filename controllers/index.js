const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
    res.render('index');
});

// About page route
router.get('/about', (req, res) => {
    res.send({ Success: 'About page' });
});

// Projects page route
router.get('/projects', (req, res) => {
    res.send({ Success: 'Projects page' });
});

// Resume page route
router.get('/resume', (req, res) => {
    res.render('resume');
});

// Videos page route
router.get('/videos', (req, res) => {
    res.send({ Success: 'Videos page' });
});

module.exports = router;
