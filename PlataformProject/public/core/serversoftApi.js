/*
 *	Architeture 
 * 	Helder Yesid Castrillón
 * 
 * It is the persistence in the FrontEnd
 * 
 * */
var ServersoftApi = angular.module("ServersoftApi", ['ngResource']);

//Create all common variables of the apps 
ServersoftApi.factory("commonvariable", function () {
	var Vari={
			url:"http://localhost:6911/api/sys/",
			OptionSetSelected:[]
			};

   return Vari; 
});

// // ServersoftApi.factory("role", ['$resource', 'commonvariable', function ($resource, commonvariable) {
// //     return $resource(commonvariable.url + "role/:rid",
// // 	{ rid: '@rid' },
// //   	{
// //   	    get: { method: "GET", isArray: true },
// //   	    post: { method: "POST" },
// //   	    put: { method: "PUT" },
// //   	    remove: { method: 'DELETE' }
// //   	});
// // }]);

// // ServersoftApi.factory("user", ['$resource', 'commonvariable', function ($resource, commonvariable) {
// //     return $resource(commonvariable.url + "user/:uid",
// // 	{ uid: '@uid' },
// //   	{
// //   	    get: { method: "GET", isArray: true },
// //   	    post: { method: "POST" },
// //   	    put: { method: "PUT" },
// //   	    remove: { method: 'DELETE' }
// //   	});
// // }]);

// // ServersoftApi.factory("roleuser", ['$resource', 'commonvariable', function ($resource, commonvariable) {
// //     return $resource(commonvariable.url + "roleuser/:uid",
// // 	{ uid: '@uid' },
// //   	{
// //   	    get: { method: "GET", isArray: true },
// //   	    post: { method: "POST" },
// //   	    put: { method: "PUT" },
// //   	    remove: { method: 'DELETE' }
// //   	});
// // }]);

// ServersoftApi.factory("programs",['$resource','commonvariable', function ($resource,commonvariable) {
// 	return $resource( commonvariable.url+"program/:pid", 
// 	{pid:'@pid'},
//   	{get: { method: "GET",isArray: true},
// 	post: { method: "POST"},
// 	put: { method: "PUT"},
// 	remove: {method:'DELETE'}
//   });
// }]);




// ServersoftApi.factory("programoption", ['$resource', 'commonvariable', function ($resource, commonvariable) {
//     return $resource(commonvariable.url + "programoption/:pid",
// 	{ pid: '@pid' },
//   	{
//   	    get: { method: "GET", isArray: true },
//   	    post: { method: "POST" },
//   	    put: { method: "PUT" },
//   	    remove: { method: 'DELETE' }
//   	});
// }]);




// ServersoftApi.factory("roleDetail", ['$resource', 'commonvariable', function ($resource, commonvariable) {
//     return $resource(commonvariable.url + "roledetail/:rid/:rdid",
// 	{
// 	    rid: '@rid',
// 	    rdid: '@rdid'
// 	},
//   	{
//   	    get: { method: "GET", isArray: true },
//   	    post: { method: "POST" },
//   	    put: { method: "PUT" },
//   	    remove: { method: 'DELETE' }
//   	});
// }]);

// ServersoftApi.factory("tenant", ['$resource', 'commonvariable', function ($resource, commonvariable) {
//     return $resource(commonvariable.url + "tenant/:tid",
// 	{ tid: '@tid' },
//   	{
//   	    get: { method: "GET", isArray: true },
//   	    post: { method: "POST" },
//   	    put: { method: "PUT" },
//   	    remove: { method: 'DELETE' }
//   	});
// }]);



////Factoria sesiones

//factoria que controla la autentificación, devuelve un objeto
//$cookies para crear cookies
//$cookieStore para actualizar o eliminar
//$location para cargar otras rutas
ServersoftApi.factory("loginservice", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "auth",
{
    usname: '@username',
    uspassword: '@password'
},
{
    post: { method: "POST", isArray: true }
});
}]);

ServersoftApi.factory("authentication", function ($cookies, $cookieStore, $location, $q, loginservice) {
       return {
              login: function (username, password) {
            //creamos la cookie con el nombre que nos han pasado
            var defered = $q.defer();
            var promise = defered.promise;
            loginservice.post({ usname: username, uspassword: password })
            .$promise.then(function (credential) {
                if (credential.length >= 1) {
                    $cookies.dataUser = credential[0];
                    //mandamos a la adminaccess
                    $location.path("/configuration");
                }
                else {
                    defered.resolve({ error: "error" });
                }
            }
            );
            return promise;

        },
        logout: function () {
            //al hacer logout eliminamos la cookie con $cookieStore.remove
            $cookieStore.remove("dataUser"),
            //mandamos al login
            $location.path("/login");
        },
        checkStatus: function () {
            //creamos un array con las rutas que queremos controlar
            var rutasPrivadas = ["/configuration", "/login"];
            if (this.in_array($location.path(), rutasPrivadas) && typeof ($cookies.dataUser) == "undefined") {
                $location.path("/login");
            }
            //en el caso de que intente acceder al login y ya haya iniciado sesión lo mandamos a la home
            if (this.in_array("/login", rutasPrivadas) && typeof ($cookies.dataUser) != "undefined") {
                $location.path("/configuration");
            }
        },
        in_array: function (needle, haystack) {
            var key = '';
            for (key in haystack) {
                if (haystack[key] == needle) {
                    return true;
                }
            }
            return false;
        }
    }
});