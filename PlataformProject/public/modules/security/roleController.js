appServersoft.controller('roleController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','role', function ($scope, $filter, commonvariable, authentication, $localStorage, role) {
///verify session
 //authentication.checkStatus();

///variables
$scope.alerts = [];
var $translate = $filter('translate');

   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.rooid = 0;
        $scope.rodescription = "";
        $scope.roinitials="";
    }
    $scope.initform();

    $scope.selectRole = function (rooid,rodescription,roinitials) {
        $scope.mode = 'edit';
        $scope.rooid = rooid;
        $scope.rodescription = rodescription;
        $scope.roinitials=roinitials;
   }

    $scope.getRole = function () {
        role.get({})
       .$promise.then(function (resp) {
           $scope.listRole = resp;
       });
    };
   $scope.getRole();

   $scope.deleteRole = function (rooid) {
        role.delete({rooid:rooid})
       .$promise.then(function (resp) {
           $scope.getRole();
           $scope.initform();
       });
    };

    $scope.saveRole = function (rodescription,roinitials) {
       role.post({rodescription: rodescription, roinitials: roinitials})
      .$promise.then(function (resp) {
          if (resp.rodescription == rodescription) {
              $scope.getRole();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };

    $scope.updateRole = function (rooid,rodescription,roinitials) {
        role.put({ rooid:rooid, rodescription:rodescription ,roinitials:roinitials})
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getRole();
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
        
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };   
}]);