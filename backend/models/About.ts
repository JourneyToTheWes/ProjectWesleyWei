const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema(
    {
        url: {
            type: String,
            required: true,
        },
        publicId: {
            type: String,
        },
        alt: {
            type: String,
        },
        width: Number,
        height: Number,
    },
    { _id: false },
);

const PhilosophySchema = new mongoose.Schema(
    {
        title: String,
        description: String,
    },
    { _id: false },
);

const CurrentWorkSchema = new mongoose.Schema(
    {
        project: String,
        description: String,
        technologies: [String],
    },
    { _id: false },
);

const AboutSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    title: {
        type: String,
    },

    intro: {
        type: String,
        required: true,
    },

    portrait: ImageSchema,

    philosophy: PhilosophySchema,

    currentWork: CurrentWorkSchema,

    focusAreas: [
        {
            type: String,
        },
    ],

    interests: [
        {
            type: String,
        },
    ],
});

const About = mongoose.model("about", AboutSchema, "about");
export default About;
