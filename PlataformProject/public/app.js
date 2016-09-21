var appServersoft = angular.module("appServersoft", ['ngRoute', 'ServersoftApi', 'pascalprecht.translate', 'ui.bootstrap', 'angular-md5', 'ngCookies']);

appServersoft.config(function($routeProvider,$translateProvider) {
 
    $routeProvider.when('/login', {
        templateUrl: "/modules/login/loginView.html",
        controller: "loginController"
    });
    $routeProvider.when('/configuration', {
		  	templateUrl: "/modules/configuration/configView.html",
		  	controller: "configController"
	   });

	//   $routeProvider.when('/roles', {
	//       templateUrl: "/modules/Role/roleView.html",
	//       controller: "roleController"
	//   });

	//   $routeProvider.when('/tenant', {
	//       templateUrl: "/modules/Tenant/tenantView.html",
	//       controller: "tenantController"
	//   });
	//   $routeProvider.when('/users', {
	//       templateUrl: "/modules/User/userView.html",
	//       controller: "userController"
	//   });
	   $routeProvider.otherwise({
	     redirectTo: '/login'
	   });




	  $translateProvider.useStaticFilesLoader({
          prefix: '/languages/',
          suffix: '.json'
      });
	  
	  $translateProvider.registerAvailableLanguageKeys(
			    ['es', 'en'],
			    {
			        'en*': 'en',
			        'es': 'es',
			         '*': 'es' // must be last!
			    }
			);
	  
	  $translateProvider.fallbackLanguage(['es']);
	  $translateProvider.determinePreferredLanguage();
	  $translateProvider.use('es');

	});

appServersoft.controller('indexController', ['$scope', '$filter', 'authentication', function ($scope, $filter, authentication) {

    ///verify session
    authentication.checkStatus();
    $scope.shutdown = function () {
        authentication.logout();
    }
}]);