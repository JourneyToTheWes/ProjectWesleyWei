const mongoose = require("mongoose");
const TextSectionSchema = new mongoose.Schema({
    id: { type: String, required: true }, // unique for hash links
    type: { type: String, default: "text" },
    title: { type: String, required: true },
    content: { type: String, required: true },
});

const ArchitectureSectionSchema = new mongoose.Schema({
    id: { type: String, required: true },
    type: { type: String, default: "architecture" },
    title: { type: String, required: true },
    diagram: { type: String }, // path to diagram image
    points: [{ type: String }],
});

const FeatureListSectionSchema = new mongoose.Schema({
    id: { type: String, required: true },
    type: { type: String, default: "feature-list" },
    title: { type: String, required: true },
    features: [{ type: String }],
});

const ChallengeSchema = new mongoose.Schema({
    problem: { type: String, required: true },
    solution: { type: String, required: true },
    outcome: { type: String },
});

const ChallengesSectionSchema = new mongoose.Schema({
    id: { type: String, required: true },
    type: { type: String, default: "challenges" },
    title: { type: String, required: true },
    challenges: [ChallengeSchema],
});

const MetricsSectionSchema = new mongoose.Schema({
    id: { type: String, required: true },
    type: { type: String, default: "metrics" },
    title: { type: String, required: true },
    metrics: [
        {
            label: { type: String, required: true },
            value: { type: String, required: true },
        },
    ],
});

const GallerySectionSchema = new mongoose.Schema({
    id: { type: String, required: true },
    type: { type: String, default: "gallery" },
    title: { type: String, required: true },
    images: [{ type: String }],
});

const ProjectSectionSchema = [
    TextSectionSchema,
    ArchitectureSectionSchema,
    FeatureListSectionSchema,
    ChallengesSectionSchema,
    MetricsSectionSchema,
    GallerySectionSchema,
];

const ProjectSchema = new mongoose.Schema(
    {
        slug: { type: String, required: true, unique: true },
        title: { type: String, required: true },
        timeline: {
            display: { type: String, required: true }, // e.g. "Dec 2017 – Present"
            start: { type: Date, required: true }, // or number/year, for sorting projects
            end: { type: Date }, // optional, could be null for ongoing projects
        },
        year: { type: Number },
        summary: { type: String },
        tech: [{ type: String }],
        previewImage: { type: String },
        links: {
            github: { type: String },
            demo: { type: String },
        },
        sections: { type: [ProjectSectionSchema], default: [] },
        otherContributors: [{ type: String }],
    },
    { timestamps: true },
);

const Project = mongoose.model("projects", ProjectSchema, "projects");
export default Project;
