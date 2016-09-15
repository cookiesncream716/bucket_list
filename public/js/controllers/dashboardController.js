bucketApp.controller('dashboardController', function($scope, userFactory){
	$scope.titleInput = 'Title';

	userFactory.getName(function(data){
		// console.log(data);
		$scope.user = data[0];
	})
	userFactory.getUsers(function(data){
		// console.log(data);
		$scope.allUsers = data;
	})
	userFactory.getList(function(data){
		console.log(data);
		$scope.userList = data;
	})
	$scope.createList = function(){
		console.log($scope.newBucket)
	}

})

