const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	desc:{
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	ingredients: {
		type: String,
		required: true,
	},
	procedure: {
		type: String,
		required: true,
	},
	categories: {
		type: String,
		required: true,
	},
	review: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now
	}

});

module.exports = mongoose.model('recipe_table', recipeSchema);