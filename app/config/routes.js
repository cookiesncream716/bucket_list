var users = require('./../controllers/users.js');
// var recipes = require('./../controllers/recipes.js');


module.exports = function(app){
	app.post('/users', function(req, res){
		users.create(req, res)
	});
}