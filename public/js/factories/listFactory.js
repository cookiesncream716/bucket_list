bucketApp.factory('listFactory', function($http){
	var factory = {};
	// factory.getList = function(info, callback){
	// 	console.log('factory' + info._id)
	// 	var id = info._id;
	// 	$http.get('/lists/' + id).success(function(output){
	// 		console.log(output);
	// 		callback(output)
	// 	})
	// }
	factory.createList = function(info, callback){
		console.log(info);
		$http.post('/lists', info).success(function(output){
			callback();
		})
	}
	return factory;
})