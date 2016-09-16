var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var uniqueValidator = require('mongoose-unique-validator')

var UserSchema = new mongoose.Schema({
	name: {type: String, required: true},
	list: [{type: Schema.Types.ObjectId, ref: 'List'}],
	created_at: {type: Date, default: new Date}
});

// ExampleSchema.plugin(uniqueValidator);
mongoose.model('User', UserSchema);