const mongoose = require("mongoose");

const SectionBaseSchema = new mongoose.Schema(
    {
        id: { type: String, required: true },
        type: { type: String, required: true },
        title: { type: String, required: true },
    },
    { _id: false, discriminatorKey: "type" },
);

const TextSectionSchema = new mongoose.Schema({
    content: { type: String, required: true },
});

const ArchitectureSectionSchema = new mongoose.Schema({
    diagram: { type: String }, // path to diagram image
    points: [{ type: String }],
});

const FeatureListSectionSchema = new mongoose.Schema({
    features: [{ type: String }],
});

const ChallengeSchema = new mongoose.Schema({
    problem: { type: String, required: true },
    solution: { type: String, required: true },
    outcome: { type: String },
});

const ChallengesSectionSchema = new mongoose.Schema({
    challenges: [ChallengeSchema],
});

const MetricsSectionSchema = new mongoose.Schema({
    metrics: [
        {
            label: { type: String, required: true },
            value: { type: String, required: true },
        },
    ],
});

const GallerySectionSchema = new mongoose.Schema({
    images: [{ type: String }],
});

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
        sections: { type: [SectionBaseSchema], default: [] },
        otherContributors: [{ type: String }],
    },
    { timestamps: true },
);

const sectionsPath = ProjectSchema.path("sections");
sectionsPath.discriminator("text", TextSectionSchema);
sectionsPath.discriminator("architecture", ArchitectureSectionSchema);
sectionsPath.discriminator("feature-list", FeatureListSectionSchema);
sectionsPath.discriminator("challenges", ChallengesSectionSchema);
sectionsPath.discriminator("metrics", MetricsSectionSchema);
sectionsPath.discriminator("gallery", GallerySectionSchema);

const Project = mongoose.model("projects", ProjectSchema, "projects");
export default Project;
