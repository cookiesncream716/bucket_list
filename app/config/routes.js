var users = require('./../controllers/users.js');
var lists = require('./../controllers/lists.js');


module.exports = function(app){
	app.post('/users', function(req, res){
		users.create(req, res)
	});
	app.get('/users', function(req, res){
		users.show(req, res)
	});
	app.get('/lists/:id', function(req, res){
		lists.showOne(req, res)
	});
}