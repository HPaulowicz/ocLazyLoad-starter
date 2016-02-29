angular.module('lazyload').controller('lazyload_controller_output', ['$scope', function($scope) {
	$scope.output = window.localStorage.getItem('phone');
}]);