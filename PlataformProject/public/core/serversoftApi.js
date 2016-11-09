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
	    url: "http://localhost:6911/api/sys/",
	    //urlCredential: "http://192.168.100.190:6911/api/sys/",
			OptionSetSelected:[]
			};

   return Vari; 
});

//Security Factory
ServersoftApi.factory("person", ['$resource', 'commonvariable','$localStorage', function ($resource, commonvariable, $localStorage) {
     return $resource(commonvariable.url + "person/:peoid",
     {
        peoid:'@peoid'
      },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("user", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "user/:usoid",
	{ 
		usoid: '@usoid' 
	 },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("role", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "role/:rooid",
	{rooid:'@rooid'},
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("typefacility", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "tfoid/:tfoid",
	{rooid:'@tfoid'},
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);


ServersoftApi.factory("userrole",['$resource','commonvariable', function ($resource,commonvariable) {
	return $resource( commonvariable.url+"userrole", 
	{userrole: '@userrole'},
  	{
        get: { method: "GET",isArray: true},
	    post: { method: "POST"},
	    put: { method: "PUT", isArray: true },
	    remove: {method:'DELETE'}
    });
}]);

//project Factory
ServersoftApi.factory("facility", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "facility/:faoid",
	{ usoid: '@faoid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("participation", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "participation/:proid",
	{ proid: '@proid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("PHCPhase", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "PHCPhase/:phoid",
	{ phoid: '@phoid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("project", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "project/:proid",
	{ proid: '@proid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("teamproject", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "teamproject/:tpoid",
	{ tpoid: '@tpoid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("typefacility", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "typefacility/:tfoid",
	{ tfoid: '@tfoid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);
////Configuration factory
ServersoftApi.factory("attribute", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "attribute/:atoid",
	{ atoid: '@atoid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("dimension", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "dimension/:dioid",
	{ dioid: '@dioid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("feature", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "feature/:feoid",
	{ feoid: '@feoid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("method", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "method/:mtoid",
	{ mtoid: '@mtoid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("methodology", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "methodology/:meoid",
	{ meoid: '@meoid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("metric", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "metric/:meoid",
	{ meoid: '@meoid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("optionquestion", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "optionquestion/:oqoid",
	{ oqoid: '@oqoid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("question", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "question/:quoid",
	{ quoid: '@quoid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("responsevalue", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "responsevalue/:rvoid",
	{ rvoid: '@rvoid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("rolesubdimension", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "rolesubdimension/:rsoid",
	{ rsoid: '@rsoid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("subdimension", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "subdimension/:suoid",
	{ dioid: '@suoid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("subfeature", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "subfeature/:sfoid",
	{ sfoid: '@sfoid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("typequestion", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "typequestion/:tqoid",
	{ tqoid: '@tqoid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("variable", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "variable/:vaoid",
	{ vaoid: '@vaoid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);

ServersoftApi.factory("version", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "version/:veoid",
	{ veoid: '@veoid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT", isArray: true },
  	    remove: { method: 'DELETE' }
  	});
}]);
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


ServersoftApi.factory("authentication", function ($cookies, $cookieStore, $location, $q, loginservice,$http, $localStorage) {
      function changeUser(user) {
            angular.extend(currentUser, user);
        }

        function urlBase64Decode(str) {
            var output = str.replace('-', '+').replace('_', '/');
            switch (output.length % 4) {
                case 0:
                    break;
                case 2:
                    output += '==';
                    break;
                case 3:
                    output += '=';
                    break;
                default:
                    throw 'Illegal base64url string!';
            }
            return window.atob(output);
        }

        function getUserFromToken() {
            var token = $localStorage.token;
          //  window.alert("Token: "+token);
            var user = {};
            if (typeof token !== 'undefined') {
                var encoded = token.split('.')[1];
                user = JSON.parse(urlBase64Decode(encoded));
            }
            return user;
        }
 var currentUser="";
    return {
        login: function (username, password) {
            //creamos la cookie con el nombre que nos han pasado
            var defered = $q.defer();
            var promise = defered.promise;

            loginservice.post({ usname: username, uspassword: password })
            .$promise.then(function (credential) {
                if (credential.length >= 1) {
                   $cookies.dataUser = credential[0];
                    $localStorage.token = credential[0].ustoken;
                    currentUser = getUserFromToken();
                    //mandamos a la adminaccess
                    //$localStorage.token = res.data.ustoken;
                    $location.path("/account");
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
            $location.path("/singup");
            delete $localStorage.token;
        },
        checkStatus: function () {
            //creamos un array con las rutas que queremos controlar
            var rutasPrivadas = ["/configuration","/singup","/account","/configuration","/person"];
            if (this.in_array($location.path(), rutasPrivadas) && typeof ($cookies.dataUser) == "undefined") {
                $location.path("/singup");
            }
            //en el caso de que intente acceder al login y ya haya iniciado sesión lo mandamos a la home
            if (this.in_array("/singup", rutasPrivadas) && typeof ($cookies.dataUser) != "undefined") {
                $location.path("/account");
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

$(function(){
$('a[title]').tooltip();
});