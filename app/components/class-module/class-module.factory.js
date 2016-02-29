angular.module('lazyload').factory('lazyload_factory', ['$http', function($http) {
	return {
		result: function() {
			return  $http({
				method: 'GET',
				url: '/service/data.json'
			})
		}
	}
}]);