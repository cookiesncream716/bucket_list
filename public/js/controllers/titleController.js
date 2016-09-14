bucketApp.controller('titleController', function($scope, $location, userFactory){
	$scope.userName = function(){
		// console.log($scope.newName.name);
		userFactory.userName($scope.newName, function(data){
			$scope.newName.name = {};
			$location.path('/dashboard')
		})
	}
})