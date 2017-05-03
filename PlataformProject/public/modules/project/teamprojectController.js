appServersoft.controller('teamprojectController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','teamproject','project','role','user','userxrole', function ($scope, $filter, commonvariable, authentication, $localStorage, teamproject, project, role, user, userxrole ) {
///verify session
//authentication.checkStatus();
///variables
$scope.lstEstados = [{ Descripcion: "Inactivo", ID: 0 },
                     { Descripcion: "Activo", ID: 1 },];
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.tpoid = 0;
        $scope.proid=0;
        $scope.rooid = 0;
        $scope.usoid = 0;
    }
    $scope.initform();

    $scope.selectteamproject = function (tpoid, proid, rooid, usoid) {
        $scope.mode = 'edit';
        $scope.tpoid= tpoid;
        $scope.proid = proid;
        var pr = $scope.listproject.filter(function (item) {
            return item.proid == proid;
        });
        $scope.proid = pr[0];
        var ro = $scope.listRole.filter(function (item) {
            return item.rooid == rooid;
        });
        $scope.rooid = ro[0];
        var us = $scope.listUser.filter(function (item) {
            return item.usoid == usoid;
        });
        $scope.usoid = us[0];
   }
    $scope.getproject = function () {
        project.get({})
       .$promise.then(function (resp) {
           $scope.listproject = resp;
       });
    };
   $scope.getproject();

   $scope.getteamproject = function () {
         teamproject.get({})
        .$promise.then(function (resp) {
            $scope.listteamproject = resp;
        });
     };
    $scope.getteamproject();


   $scope.getRole = function () {
        role.get({})
       .$promise.then(function (resp) {
           $scope.listRole = resp;
       });
    };
   $scope.getRole();

   $scope.getUser = function () {
         user.get({})
        .$promise.then(function (resp) {
             $scope.listUser = resp;
       });
    };
  $scope.getUser();

   $scope.changeRol = function () {
        userxrole.get({rooid: $scope.rooid.rooid })
       .$promise.then(function (resp) {
           $scope.listUser = resp;
       });
    };
   $scope.changeRol();
   
   $scope.deleteteamproject = function () {
    teamproject.delete({ tpoid: $scope.tpoid})
      .$promise.then(function (resp) {
          $scope.getteamproject();
           $scope.initform();
       });
   };
 $scope.getEstado = function (id) {
        return $scope.lstEstados[id].Descripcion;
    };

    $scope.saveteamproject = function (proid,rooid,usoid) {
       teamproject.post({ proid: proid.proid, rooid: rooid.rooid, usoid: usoid.usoid })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getteamproject();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };

    $scope.updateteamproject = function (tpoid,proid,rooid,usoid) {
        teamproject.put({ tpoid: tpoid  ,proid: proid.proid, rooid: rooid.rooid, usoid: usoid.usoid  })
        .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getteamproject();
              $scope.alerts.push({ msg: $translate("BED_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("BED_MSG_ERROR"), type: 'error' });
          }
      });
    };
            $scope.addAlert = function (menssage) {
            $scope.alerts.push({ label: " ", msg: menssage });
        };

  $scope.getName = function (tfoid) {
      if(tfoid > 0){
        var feature = $scope.listtypeproject.filter(function (item) {
            return item.tfoid == tfoid;
         });
         return feature[0].tfname;
      }
    };

    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        }; 

}]);