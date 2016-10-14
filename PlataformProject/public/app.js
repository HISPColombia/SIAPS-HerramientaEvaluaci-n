var appServersoft = angular.module("appServersoft", ['ngStorage','ngRoute', 'ServersoftApi', 'pascalprecht.translate', 'ui.bootstrap', 'angular-md5', 'ngCookies']);

appServersoft.config(function($routeProvider,$translateProvider,$httpProvider) {
 
    $routeProvider.when('/singup', {
        templateUrl: "/modules/security/singupView.html",
        controller: "singupController"
    });

	$routeProvider.when('/person', {
        templateUrl: "/modules/security/personView.html",
        controller: "personController"
    });

    $routeProvider.when('/account', {
		  	templateUrl: "/modules/security/accountView.html",
		  	controller: "accountController"
	   });

    $routeProvider.when('/configuration', {
		  	templateUrl: "/modules/configuration/configurationView.html",
		  	controller: "configurationController"
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
	     redirectTo: '/singup'
	   });


	       $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function($q, $location, $localStorage) {
			  // window.alert("interceptors")
            return {
                'request': function (config) {
                    config.headers = config.headers || {};
                    if ($localStorage.token) {
                        config.headers.Authorization = 'Bearer ' + $localStorage.token;
                    }
                    return config;
                },
                'responseError': function(response) {
                    if(response.status === 401 || response.status === 403) {
                        $location.path('/singup');
                    }
                    return $q.reject(response);
                }
            };
        }]);




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

