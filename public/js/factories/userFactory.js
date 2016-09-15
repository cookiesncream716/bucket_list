bucketApp.factory('userFactory', function($http){
	var factory = {};
	var user = [];
	factory.userName = function(info, callback){
		// console.log('factory' + info.name);
		$http.post('/users', info).success(function(output){
			// console.log(output);
			user.push(output);
			callback(user);
		});
	}
	factory.getName = function(callback){
		callback(user);
	};
	factory.getList = function(callback){
		console.log(user[0]._id)
		var id = user[0]._id;
		console.log('/lists/' + id);
		$http.get('/lists/' + id).success(function(output){
			console.log(output);
			callback(output);
		})
	}
	factory.getUsers = function(callback){
		$http.get('/users').success(function(output){
			// console.log(output);
			callback(output);
		})
	}
	return factory
})