const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	description: {
		type: Object,
		required: true,
	},
	images: {
		type: Object,
	},
	imageDir: {
		type: String,
		required: true
	},
	otherContributors: {
		type: [String],
		required: true
	},
	skills: {
		type: [String],
		required: true
	},
	keyPoints: {
		type: [String],
		required: true
	},
	links: {
		type: [Object],
		required: true
	}
});

const Project = mongoose.model('projects', ProjectSchema, 'projects');
export default Project;
