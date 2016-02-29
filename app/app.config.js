var lazyload = angular.module('lazyload', ['ui.router', 'ngAnimate', 'oc.lazyLoad'])
.config(['$stateProvider', '$ocLazyLoadProvider', '$urlRouterProvider', function($stateProvider, $ocLazyLoadProvider, $urlRouterProvider) {
	$ocLazyLoadProvider.config({
		debug: true
	});
	$stateProvider
	.state('index', {
		url: "/",
		views: {
			"primary_view": {
				controller: 'lazyload_controller_input',
				templateUrl: 'view-input'
			},
			"content_view": {
				controller: 'lazyload_controller',
				templateUrl: 'view-one'
			}
		},
		resolve: {
			controller: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load([
					'app/components/class-module/class-module.controller.js',
					'app/components/class-module/class-module.controller-input.js',
					'app/components/class-module/class-module.factory.js',
					'app/components/class-module/class-module.directive.js',
					'app/components/class-module/class-module.filters.js',
					'app/components/class-module/views/view-one.html',
					'app/components/class-module/views/view-input.html'
				]);
			}]
		}
	}).state('data', {
		url: "/data/:class",
		views: {
			"primary_view": {
				controller: 'lazyload_controller_output',
				templateUrl: 'view-output'
			},
			"content_view": {
				controller: 'lazyload_controller',
				templateUrl: 'view-one'
			}
		},
		resolve: {
			controller: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load([
					'app/components/class-module/class-module.controller-output.js',
					'app/components/class-module/class-module.controller.js',
					'app/components/class-module/class-module.factory.js', 
					'app/components/class-module/views/view-output.html',
					'app/components/class-module/views/view-one.html',
					'app/components/class-module/class-module.filters.js'
				]);
			}]
		}
	});
	$urlRouterProvider.otherwise('/');
}]);