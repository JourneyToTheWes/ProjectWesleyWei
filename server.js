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

var resumeUrl = "mongodb://WesleyWei:WesleyResume@ds117759.mlab.com:17759/resume";
var projectsUrl = "mongodb://WesleyWei:WesleyProjects1@ds125871.mlab.com:25871/wesprojects"

var resumeDb;
var projectsDb;

MongoClient.connect(resumeUrl, (err, client) => {
    if (err) {
        return console.log(err);
    }
    resumeDb = client.db('resume');
});

MongoClient.connect(projectsUrl, (err, client) => {
    if (err) {
        return console.log(err);
    }
    projectsDb = client.db('wesprojects');
});

app.get("/", (req, res) => {
    res.render("WesleyHome");
});

app.get("/WesleyResume", (req, res) => {
    var locals = {};
    locals.title = "WestWay";
    locals.pageType = "Projects";
    locals.css = "WesleyResume.css";
    var tasks = [
        // Load work experience
        function (callback) {
            resumeDb.collection("workExperience").find().toArray((err, results) => {
                if (err) {
                    return console.log(err);
                }
                locals.workExperience = results;
                callback();
            });
        },

        //Load skills
        function (callback) {
            resumeDb.collection("skills").find().toArray((err, results) => {
                if (err) {
                    return console.log(err);
                }
                locals.skills = results;
                callback();
            });
        },

        // Load leadership
        function (callback) {
            resumeDb.collection("leadership").find().toArray((err, results) => {
                if (err) {
                    return console.log(err);
                }
                locals.leadership = results;
                callback();
            });
        },

        // Load honors and awards
        function (callback) {
            resumeDb.collection("honorsAndAwards").find().toArray((err, results) => {
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
    var locals = {};
    locals.title = "WestWay";
    locals.pageType = "Projects";
    locals.css = "WesleyProject.css";
    // Load projects
    projectsDb.collection("projects").find().toArray((err, results) => {
        if (err) {
            return console.log(err);
        }
        locals.projects = results;
        res.render("WesleyProjects", locals);
    })
});

app.get("/WesleyVideos", (req, res) => {
    var locals = {};
    locals.title = "WestWay";
    locals.pageType = "Videos";
    locals.css = "WesleyProject.css";
    res.render("WesleyVideos", locals);
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Wesley's app listening on port 3000!");
});