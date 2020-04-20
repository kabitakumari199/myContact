const mongoose = require('mongoose');
const postsSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	featureImage: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now
	}

});

module.exports = mongoose.model('table_posts', postsSchema);