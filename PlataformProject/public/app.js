var appServersoft = angular.module("appServersoft", ['ngStorage','ngRoute', 'ServersoftApi', 'pascalprecht.translate', 'ui.bootstrap', 'angular-md5', 'ngCookies']);

appServersoft.config(function($routeProvider,$translateProvider,$httpProvider) {
//Routers Security
    $routeProvider.when('/singup', {//login
        templateUrl: "/modules/security/singupView.html",
        controller: "singupController"
    });

	$routeProvider.when('/person', {
        templateUrl: "/modules/security/personView.html",
        controller: "personController"
    });

	$routeProvider.when('/role', {
        templateUrl: "/modules/security/roleView.html",
        controller: "roleController"
    });
	
    $routeProvider.when('/account', {
		  	templateUrl: "/modules/security/accountView.html",
		  	controller: "accountController"
	   });

    $routeProvider.when('/user', {
		  	templateUrl: "/modules/security/userView.html",
		  	controller: "userController"
	   });
 
    $routeProvider.when('/userrole', {
		  	templateUrl: "/modules/security/userroleView.html",
		  	controller: "userroleController"
	   });

//Routers Project
    $routeProvider.when('/facility', {
		  	templateUrl: "/modules/project/facilityView.html",
		  	controller: "facilityController"
	   });

    $routeProvider.when('/participation', {
		  	templateUrl: "/modules/project/participationView.html",
		  	controller: "participationController"
	   });

    $routeProvider.when('/PHCPhase', {
		  	templateUrl: "/modules/project/PHCPhaseView.html",
		  	controller: "PHCPhaseController"
	   });

    $routeProvider.when('/project', {
		  	templateUrl: "/modules/project/projectView.html",
		  	controller: "projectController"
	   });

    $routeProvider.when('/teamproject', {
		  	templateUrl: "/modules/project/teamprojectView.html",
		  	controller: "teamprojectController"
	   });

    $routeProvider.when('/typefacility', {
		  	templateUrl: "/modules/project/typefacilityView.html",
		  	controller: "typefacilityController"
	   });

//Routers Configuration

    $routeProvider.when('/attribute', {
		  	templateUrl: "/modules/configuration/attributeView.html",
		  	controller: "attributeController"
	   });

    $routeProvider.when('/dimension', {
		  	templateUrl: "/modules/configuration/dimensionView.html",
		  	controller: "dimensionController"
	   });

    $routeProvider.when('/feature', {
		  	templateUrl: "/modules/configuration/featureView.html",
		  	controller: "featureController"
	   });

    $routeProvider.when('/methodology', {
		  	templateUrl: "/modules/configuration/methodologyView.html",
		  	controller: "methodologyController"
	   });

    $routeProvider.when('/method', {
		  	templateUrl: "/modules/configuration/methodView.html",
		  	controller: "methodController"
	   });

    $routeProvider.when('/metric', {
		  	templateUrl: "/modules/configuration/metricView.html",
		  	controller: "metricController"
	   });

    $routeProvider.when('/optionquestion', {
		  	templateUrl: "/modules/configuration/optionquestionView.html",
		  	controller: "optionquestionController"
	   });

    $routeProvider.when('/question', {
		  	templateUrl: "/modules/configuration/questionView.html",
		  	controller: "questionController"
	   });

    $routeProvider.when('/responsevalue', {
		  	templateUrl: "/modules/configuration/responsevalueView.html",
		  	controller: "responsevalueController"
	   });

    $routeProvider.when('/rolesubdimension', {
		  	templateUrl: "/modules/configuration/rolesubdimensionView.html",
		  	controller: "rolesubdimensionController"
	   });

    $routeProvider.when('/subdimension', {
		  	templateUrl: "/modules/configuration/subdimensionView.html",
		  	controller: "subdimensionController"
	   });

    $routeProvider.when('/subfeature', {
		  	templateUrl: "/modules/configuration/subfeatureView.html",
		  	controller: "subfeatureController"
	   });

    $routeProvider.when('/typequestion', {
		  	templateUrl: "/modules/configuration/typequestionView.html",
		  	controller: "typequestionController"
	   });

    $routeProvider.when('/variable', {
		  	templateUrl: "/modules/configuration/variableView.html",
		  	controller: "variableController"
	   });

    $routeProvider.when('/version', {
		  	templateUrl: "/modules/configuration/versionView.html",
		  	controller: "versionController"
	   });

//otherwise	   
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

