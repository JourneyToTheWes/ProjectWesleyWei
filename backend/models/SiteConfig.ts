const mongoose = require("mongoose");

const SiteConfigSchema = new mongoose.Schema({
    resume: { type: String, required: true },
    github: { type: String },
    linkedin: { type: String },
    youtube: { type: String },
    instagram: { type: String },
});

const SiteConfig = mongoose.model("siteConfig", SiteConfigSchema, "siteConfig");
export default SiteConfig;
