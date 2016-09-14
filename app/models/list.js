var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var uniqueValidator = require('mongoose-unique-validator')

var ListSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	title: {type: String, required: true, min: 5},
	description: {type: String,required: true, min: 10},
	completed: {type: Boolean},
	created_at: {type: Date, default: new Date}
});

// ListSchema.plugin(uniqueValidator);
mongoose.model('List', ListSchema);