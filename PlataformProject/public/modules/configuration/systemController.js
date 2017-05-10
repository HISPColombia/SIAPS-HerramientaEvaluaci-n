appServersoft.controller('systemController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','system', function ($scope, $filter, commonvariable, authentication, $localStorage, system) {
///verify session
 //authentication.checkStatus();

///variables
$scope.lstEstados = [{ Descripcion: "Inactivo", ID: 0 },
                        { Descripcion: "Activo", ID: 1 },];
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.sysoid = 0;
        $scope.sysname="";
        $scope.initials="";
    }
    $scope.initform();

    $scope.selectsystem = function (sysoid,sysname,initials) {
        $scope.mode = 'edit';
        $scope.sysoid = sysoid;
        $scope.sysname= sysname;
        $scope.initials= initials;
    }
   
    $scope.getsystem = function () {
        system.get({})
       .$promise.then(function (resp) {
           $scope.listsystem = resp;
       });
    };

   $scope.getsystem();

       $scope.deletesystem = function (sysoid) {
        system.delete({sysoid:sysoid})
       .$promise.then(function (resp) {
           $scope.getsystem();
           $scope.initform();
       });
    };

    $scope.savesystem = function ( sysname,initials) {
       alert(sysname +" "+ initials);
       system.post({ sysname: sysname, initials: initials })
      .$promise.then(function (resp) {
          if (resp.sysname == sysname) {
              $scope.getsystem();
              $scope.initform();          
          } 
          else {
              alert({ msg: $translate("MSG_ERROR")});
          }
      });
    };

    $scope.updatesystem = function (sysoid,sysname,initials) {
        system.put({ sysoid:sysoid, sysname: sysname, initials: initials })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getsystem();
              $scope.initform();
          }
          else {
              alert({ msg: $translate("MSG_ERROR")});;
          }
      });
    };
            $scope.addAlert = function (menssage) {
            $scope.alerts.push({ label: " ", msg: menssage });
        };

    // $scope.getsystem= function () {
    //     systemology.get({})
    //    .$promise.then(function (resp) {
    //        $scope.listsystemology = resp;
    //    });
    // };
// $scope.getsystemology();
        
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };   
}]);