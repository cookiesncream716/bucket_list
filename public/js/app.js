var bucketApp = angular.module('bucketApp', ['ngRoute'])

bucketApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/title.html'
		})
		.when('/dashboard', {
			templateUrl: 'partials/dashboard.html'
		})
		.otherwise({
			redirectTo: '/'
		})
})