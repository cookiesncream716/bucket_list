bucketApp.controller('dashboardController', function($scope, $location, userFactory, listFactory){
	userFactory.getUser(function(data){
		console.log('dashboardController')
		console.log(data);
		$scope.user = data;
	})
	userFactory.allUsers(function(data){
		console.log(data);
		$scope.allUsers = data;
	})
	// listFactory.getList($scope.user, function(data){
		// var id = $scope.user._id
		// console.log(id)
		// console.log(data);
		// $scope.userList = data;
	// })
	$scope.createList = function(){
		console.log($scope.newBucket);
		listFactory.createList($scope.newBucket, function(data){
			userFactory.getUser(function(data){
				
				$scope.newBucket = {};
				$scope.user = data
			})
		})
	}
	$scope.logout = function(){
		// console.log('clicked logout')
		userFactory.logout(function(data){
			$location.path('/');
		})
	}

})

