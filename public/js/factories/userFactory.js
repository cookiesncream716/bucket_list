bucketApp.factory('userFactory', function($http){
	var factory = {};
	var user = [];
	factory.userName = function(info, callback){
		console.log('factory' + info.name);
		$http.post('/users', info).success(function(output){
			console.log(output);
			user.push(output);
			callback(user);
		});
	}
	factory.getName = function(callback){
		callback(user);
	};
	return factory
})