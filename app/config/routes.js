var users = require('./../controllers/users.js');
var lists = require('./../controllers/lists.js');


module.exports = function(app){
	app.post('/users', function(req, res){
		users.create(req, res)
	});
	app.get('/users', function(req, res){
		users.showAll(req, res)
	});
	app.post('/users/:id', function(req, res){
		users.show(req, res)
	});
	// app.get('/lists/:id', function(req, res){
	// 	lists.showOne(req, res)
	// });
	app.post('/lists', function(req, res){
		lists.create(req, res)
	});
}