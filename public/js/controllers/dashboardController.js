bucketApp.controller('dashboardController', function($scope, userFactory){
	userFactory.getName(function(data){
		console.log(data);
		$scope.user = data[0];
	})
})

