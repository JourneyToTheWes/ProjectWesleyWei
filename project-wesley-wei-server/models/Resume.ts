const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
	honorsAndAwards: [
		{
			date: {
				type: String,
				required: true,
			},
			title: {
				type: String,
				required: true,
			},
		},
	],
	leadership: [
		{
			date: {
				type: String,
				required: true,
			},
			title: {
				type: String,
				required: true,
			},
			position: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				required: true,
			},
		},
	],
	skills: [
		{
			title: {
				type: String,
				required: true,
			},
			body: {
				type: Object,
			},
		},
	],
	workExperience: {
		title: {
			type: String,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
		experience: {
			type: String,
			required: true,
		},
	},
	categories: [{
		name: {
			type: String,
			required: true,
		},
		value: {
			type: String,
			required: true,
		}
	}]
});

const Resume = mongoose.model('resume', ResumeSchema, 'resume');
export default Resume;
