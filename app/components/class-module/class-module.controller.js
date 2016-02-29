angular.module('lazyload').controller('lazyload_controller', ['lazyload_factory', '$scope', '$stateParams', function(lazyload_factory, $scope, $stateParams) {
	$scope.class_data = [];
	lazyload_factory.result().success(function(data){
		if ($stateParams.class) {
			for (i in data.students) {
				if (data.students[i].class == $stateParams.class) {
					console.log(data.students[i].class);
					$scope.class_data.push(data.students[i]);
				}
			}
		} else {
			$scope.class_data = data.students;
		}
	});
}]);