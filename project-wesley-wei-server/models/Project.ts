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
});

const Project = mongoose.model('projects', ProjectSchema, 'projects');
export default Project;