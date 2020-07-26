const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
	category: {
		type: String,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
});

const Video = mongoose.model('videos', VideoSchema, 'videos');
export default Video;
