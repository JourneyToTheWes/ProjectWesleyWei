const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const async = require("async");
const app = express();

app.set("view engine", "pug");
app.use(express.static("public"));
app.use(express.static("public/js"));
app.use(express.static("public/css"));
app.use(bodyParser.urlencoded({ extended: true }));

var url = "mongodb://WesleyWei:WesleyResume@ds117759.mlab.com:17759/resume";

var db;

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log(err);
    }
    db = client.db('resume');
    app.listen(3000, () => {
        console.log("Wesley's app listening on port 3000!");
    });
});

app.get("/", (req, res) => {
    res.render("WesleyHome");
});

app.get("/WesleyResume", (req, res) => {
    var locals = {};
    var tasks = [
        // Load work experience
        function (callback) {
            db.collection("workExperience").find().toArray((err, results) => {
                if (err) {
                    return console.log(err);
                }
                locals.workExperience = results;
                callback();
            });
        },

        //Load skills
        function (callback) {
            db.collection("skills").find().toArray((err, results) => {
                if (err) {
                    return console.log(err);
                }
                locals.skills = results;
                callback();
            });
        },

        // Load leadership
        function (callback) {
            db.collection("leadership").find().toArray((err, results) => {
                if (err) {
                    return console.log(err);
                }
                locals.leadership = results;
                callback();
            });
        },

        // Load honors and awards
        function (callback) {
            db.collection("honorsAndAwards").find().toArray((err, results) => {
                if (err) {
                    return console.log(err);
                }
                locals.honorsAndAwards = results;
                callback();
            });
        }
    ];
    
    async.parallel(tasks, function(err) {
        if (err) {
            return next(err); // let express handle the error by calling 'next'
        }
        res.render("WesleyResume", locals)
    });
});

app.get("/WesleyProjects", (req, res) => {
    res.render("WesleyProjects");
});