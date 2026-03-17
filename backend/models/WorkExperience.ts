const mongoose = require("mongoose");

const WorkExperienceSchema = new mongoose.Schema(
    {
        company: { type: String, required: true },
        role: { type: String, required: true },
        startDate: { type: String, required: true },
        endDate: { type: String },
        experiences: { type: [String], required: true },
        tech: { type: [String], default: [] },
        location: { type: String }, // optional
    },
    { _id: false },
);

const WorkExperience = mongoose.model(
    "workExperience",
    WorkExperienceSchema,
    "workExperience",
);
export default WorkExperience;
