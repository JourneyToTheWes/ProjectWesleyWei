const express = require('express');
const app = express();

// Set view engine for node application
app.set('view engine', 'pug');
app.use(express.static('public'));
app.use(express.static('public/css'));
app.use(express.static('public/images'));

// Use Controllers
app.use(require('./controllers/index'));

app.listen(process.env.PORT || 3000, () => {
    console.log('Project Wesley Wei server is running');
});
