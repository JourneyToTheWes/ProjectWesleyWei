const express = require('express');
const app = express();

// Set view engine for node application
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.static('public/css'));
app.use(express.static('public/images'));
app.use(express.static('public/js'));

// Use Controllers
app.use(require('./controllers/index'));

// Port that app is running on
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Project Wesley Wei server is running on port: ' + port);
});
