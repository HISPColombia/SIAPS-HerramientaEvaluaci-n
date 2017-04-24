var appServersoft = angular.module("appServersoft", ['ngStorage','ui.router', 'ServersoftApi', 'pascalprecht.translate', 'ui.bootstrap', 'angular-md5', 'ngCookies']);
appServersoft.config(function($stateProvider,$translateProvider,$httpProvider,$urlRouterProvider) {
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
     // Chart Menu
      .state('dashboard.mainchars', {
         url: "/mainchars",
         views: {
           "sub-content@dashboard": { templateUrl:"/modules/chars/main.html"}
         }     
       })
      .state('dashboard.mainchars.chars', {
        url: "/chars",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/chars/charsView.html", controller: "charsController"}
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

      .state('dashboard.mainsecurity.userrole', {
        url: "/userrole",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/security/userroleView.html", controller: "userroleController"}
        }     
      })
      
      // Project Menu : sub-menus and contents
      .state('dashboard.mainproject', {
        url: "/mainproject",
        views: {
          "sub-menu@dashboard": { templateUrl: "/modules/project/main.html" }
        }     
      })

      .state('dashboard.mainproject.project', {
        url: "/project",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/project/projectView.html", controller: "projectController"}
        }     
      })
      .state('dashboard.mainproject.facility', {
        url: "/facility",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/project/facilityView.html", controller: "facilityController"}
        }     
      })
      .state('dashboard.mainproject.teamproject', {
        url: "/teamproject",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/project/teamprojectView.html", controller: "teamprojectController"}
        }     
      })
      .state('dashboard.mainproject.participation', {
        url: "/participation",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/project/participationView", controller: "participationController"}
        }     
      })
      

      // Configiration Menu : sub-menus and contents
      .state('dashboard.mainconfiguration', {
        url: "/mainconfiguration",
        views: {
          "sub-menu@dashboard": { templateUrl: "/modules/configuration/main.html" }
        }     
      })

      .state('dashboard.mainconfiguration.dimension', {
        url: "/dimension",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/configuration/dimensionView.html", controller: "dimensionController"}
        }     
      })

      .state('dashboard.mainconfiguration.subdimension', {
        url: "/subdimension",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/configuration/subdimensionView.html", controller: "subdimensionController"}
        }     
      })  

      .state('dashboard.mainconfiguration.rolesubdimension', {
        url: "/rolesubdimension",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/configuration/rolesubdimensionView.html", controller: "rolesubdimensionController"}
        }     
      })  
     
      .state('dashboard.mainconfiguration.feature', {
        url: "/feature",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/configuration/featureView.html", controller: "featureController"}
        }     
      })

      .state('dashboard.mainconfiguration.subfeature', {
        url: "/subfeature",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/configuration/subfeatureView.html", controller: "subfeatureController"}
        }     
      })

      .state('dashboard.mainconfiguration.attribute', {
        url: "/attribute",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/configuration/attributeView.html", controller: "attributeController"}
        }     
      })
       
      .state('dashboard.mainconfiguration.metric', {
        url: "/metric",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/configuration/metricView.html", controller: "metricController"}
        }     
      })
      .state('dashboard.mainconfiguration.system', {
        url: "/system",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/configuration/systemView.html", controller: "systemController"}
        }     
      })
      // .state('dashboard.mainconfiguration.methodology', {
      //   url: "/methodology",
      //   views: {
      //     "sub-content@dashboard": { templateUrl:"/modules/configuration/methodologyView.html", controller: "methodologyController"}
      //   }     
      // })

      .state('dashboard.mainconfiguration.method', {
        url: "/method",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/configuration/methodView.html", controller: "methodController"}
        }     
      })
       .state('dashboard.mainconfiguration.question', {
        url: "/question",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/configuration/questionView.html", controller: "questionController"}
        }     
      })
       .state('dashboard.mainconfiguration.PHCPhase', {
        url: "/PHCPhase",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/configuration/PHCPhaseView.html", controller: "PHCPhaseController"}
        }     
      })

       .state('dashboard.mainconfiguration.typefacility', {
        url: "/typefacility",
        views: {
          "sub-content@dashboard": { templateUrl:"/modules/configuration/typefacilityView.html", controller: "typefacilityController"}
        }     
      })

      $urlRouterProvider.otherwise("/singup")

  
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

