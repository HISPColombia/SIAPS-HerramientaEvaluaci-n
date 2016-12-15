var appServersoft = angular.module("appServersoft", ['ngStorage','ui.router', 'ServersoftApi', 'pascalprecht.translate', 'ui.bootstrap', 'angular-md5', 'ngCookies']);

appServersoft.config(function($stateProvider,$translateProvider,$httpProvider,$urlRouterProvider) {
//Routers Security
// http://plnkr.co/edit/1kpmUiacrb3Aoo4E19O1?p=preview
    //  $urlRouterProvider.otherwise("/configuration");

    // 	$routeProvider.when('/singup', {//login
//         templateUrl: "/modules/security/singupView.html",
//         controller: "singupController"
//     });
      $stateProvider
        .state('singup', {
        url: "/singup",
        views: {
          "": { templateUrl:"/modules/security/singupView.html" , controller: "singupController"}
        }     
      })
      .state('dashboard', {
        url: "/dashboard",
        views: {
          "" :  { templateUrl: "dashboard.html" },
          "menu@dashboard": { templateUrl: "main.html" }
         
        }
      })
      // Security Menu : sub-menus and contents
      .state('dashboard.mainsecurity', {
        url: "/mainsecurity",
        views: {
          "sub-menu@dashboard": { templateUrl: "/modules/security/main.html" }
        } 
      })
      
      .state('dashboard.mainsecurity.person', {
        url: "/person",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/security/personView.html", controller: "personController"}
        }     
      })
      .state('dashboard.mainsecurity.role', {
        url: "/role",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/security/roleView.html", controller: "roleController"}
        }     
      })
      
      .state('dashboard.mainsecurity.user', {
        url: "/user",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/security/userView.html", controller: "userController"}
        }     
      })
      
      // Project Menu : sub-menus and contents
      .state('dashboard.mainproject', {
        url: "/mainproject",
        views: {
          "sub-menu@dashboard": { templateUrl: "/modules/project/main.html" }
        }     
      })

      .state('dashboard.mainproject.facility', {
        url: "/facility",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/project/facilityView.html", controller: "facilityController"}
        }     
      })
      .state('dashboard.mainproject.participation', {
        url: "/participation",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/project/participationView", controller: "participationController"}
        }     
      })
      
      .state('dashboard.mainproject.typefacility', {
        url: "/typefacility",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/project/typefacilityView.html", controller: "typefacilityController"}
        }     
      })

      // Configiration Menu : sub-menus and contents
      .state('dashboard.mainconfiguration', {
        url: "/mainconfiguration",
        views: {
          "sub-menu@dashboard": { templateUrl: "/modules/configuration/main.html" }
        }     
      })

      .state('dashboard.mainconfiguration.attribute', {
        url: "/attribute",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/configuration/attributeView.html", controller: "attributeController"}
        }     
      })
      .state('dashboard.mainconfiguration.dimension', {
        url: "/dimension",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/configuration/dimensionView.html", controller: "dimensionController"}
        }     
      })
      
      .state('dashboard.mainconfiguration.feature', {
        url: "/feature",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/configuration/featureView.html", controller: "featureController"}
        }     
      })
       .state('dashboard.mainconfiguration.method', {
        url: "/method",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/configuration/methodView.html", controller: "methodController"}
        }     
      })
       .state('dashboard.mainconfiguration.methodology', {
        url: "/methodology",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/configuration/methodologyView.html", controller: "methodologyController"}
        }     
      })
       .state('dashboard.mainconfiguration.metric', {
        url: "/metric",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/configuration/metricView.html", controller: "metricController"}
        }     
      })
       .state('dashboard.mainconfiguration.question', {
        url: "/question",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/configuration/questionView.html", controller: "questionController"}
        }     
      })
       .state('dashboard.mainconfiguration.optionquestion', {
        url: "/optionquestion",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/configuration/optionquestionView.html", controller: "optionquestionController"}
        }     
      })

       .state('dashboard.mainconfiguration.subdimension', {
        url: "/subdimension",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/configuration/subdimensionView.html", controller: "subdimensionController"}
        }     
      })







      $urlRouterProvider.otherwise("/singup")

        // $stateProvider
        //     .state('singup', {
        // 		url: "/singup",
		// 		templateUrl: "/modules/security/singupView.html",
     	// 		controller: "singupController"
        //     })
        //     .state('account', {
        //         url: "/account",
		//      	templateUrl: "/modules/security/accountView.html",
		//   	    controller: "accountController"
        //     })
		// 	.state('person', {
        //         url: "/person",
		//      	templateUrl: "/modules/security/personView.html",
		//   	    controller: "personController"
        //     })
        //     .state('configuration', {
        //         url: "/configuration",
		//      	templateUrl: "/modules/configuration/configurationView.html",
		//   	    controller: "configurationController"
        //     })

// 	$routeProvider.when('/singup', {//login
//         templateUrl: "/modules/security/singupView.html",
//         controller: "singupController"
//     });

// 	$routeProvider.when('/person', {
//         templateUrl: "/modules/security/personView.html",
//         controller: "personController"
//     });

// 	$routeProvider.when('/role', {
//         templateUrl: "/modules/security/roleView.html",
//         controller: "roleController"
//     });
	
//     $routeProvider.when('/account', {
// 		  	templateUrl: "/modules/security/accountView.html",
// 		  	controller: "accountController"
// 	   });

//     $routeProvider.when('/user', {
// 		  	templateUrl: "/modules/security/userView.html",
// 		  	controller: "userController"
// 	   });
 
//     $routeProvider.when('/userrole', {
// 		  	templateUrl: "/modules/security/userroleView.html",
// 		  	controller: "userroleController"
// 	   });

// //Routers Project
//     $routeProvider.when('/facility', {
// 		  	templateUrl: "/modules/project/facilityView.html",
// 		  	controller: "facilityController"
// 	   });

//     $routeProvider.when('/participation', {
// 		  	templateUrl: "/modules/project/participationView.html",
// 		  	controller: "participationController"
// 	   });

//     $routeProvider.when('/PHCPhase', {
// 		  	templateUrl: "/modules/project/PHCPhaseView.html",
// 		  	controller: "PHCPhaseController"
// 	   });

//     $routeProvider.when('/project', {
// 		  	templateUrl: "/modules/project/projectView.html",
// 		  	controller: "projectController"
// 	   });

//     $routeProvider.when('/teamproject', {
// 		  	templateUrl: "/modules/project/teamprojectView.html",
// 		  	controller: "teamprojectController"
// 	   });

//     $routeProvider.when('/typefacility', {
// 		  	templateUrl: "/modules/project/typefacilityView.html",
// 		  	controller: "typefacilityController"
// 	   });

// //Routers Configuration

//     $routeProvider.when('/attribute', {
// 		  	templateUrl: "/modules/configuration/attributeView.html",
// 		  	controller: "attributeController"
// 	   });

//     $routeProvider.when('/dimension', {
// 		  	templateUrl: "/modules/configuration/dimensionView.html",
// 		  	controller: "dimensionController"
// 	   });

//     $routeProvider.when('/feature', {
// 		  	templateUrl: "/modules/configuration/featureView.html",
// 		  	controller: "featureController"
// 	   });

//     $routeProvider.when('/methodology', {
// 		  	templateUrl: "/modules/configuration/methodologyView.html",
// 		  	controller: "methodologyController"
// 	   });

//     $routeProvider.when('/method', {
// 		  	templateUrl: "/modules/configuration/methodView.html",
// 		  	controller: "methodController"
// 	   });

//     $routeProvider.when('/metric', {
// 		  	templateUrl: "/modules/configuration/metricView.html",
// 		  	controller: "metricController"
// 	   });

//     $routeProvider.when('/optionquestion', {
// 		  	templateUrl: "/modules/configuration/optionquestionView.html",
// 		  	controller: "optionquestionController"
// 	   });

//     $routeProvider.when('/question', {
// 		  	templateUrl: "/modules/configuration/questionView.html",
// 		  	controller: "questionController"
// 	   });

//     $routeProvider.when('/responsevalue', {
// 		  	templateUrl: "/modules/configuration/responsevalueView.html",
// 		  	controller: "responsevalueController"
// 	   });

//     $routeProvider.when('/rolesubdimension', {
// 		  	templateUrl: "/modules/configuration/rolesubdimensionView.html",
// 		  	controller: "rolesubdimensionController"
// 	   });

//     $routeProvider.when('/subdimension', {
// 		  	templateUrl: "/modules/configuration/subdimensionView.html",
// 		  	controller: "subdimensionController"
// 	   });

//     $routeProvider.when('/subfeature', {
// 		  	templateUrl: "/modules/configuration/subfeatureView.html",
// 		  	controller: "subfeatureController"
// 	   });

//     $routeProvider.when('/typequestion', {
// 		  	templateUrl: "/modules/configuration/typequestionView.html",
// 		  	controller: "typequestionController"
// 	   });

//     $routeProvider.when('/variable', {
// 		  	templateUrl: "/modules/configuration/variableView.html",
// 		  	controller: "variableController"
// 	   });

//     $routeProvider.when('/version', {
// 		  	templateUrl: "/modules/configuration/versionView.html",
// 		  	controller: "versionController"
// 	   });

// //otherwise	   
//    $routeProvider.otherwise({
// 	     redirectTo: '/singup'
// 	   });


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

