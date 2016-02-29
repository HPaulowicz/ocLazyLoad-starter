angular.module('lazyload').controller('lazyload_controller_input', ['$scope', function($scope) {
	if (window.localStorage.getItem('phone')) {
		$scope.phone = window.localStorage.getItem('phone');
	}
	$scope.to_localstorage = function() {
		window.localStorage.setItem('phone', $scope.phone);
	}
}]);