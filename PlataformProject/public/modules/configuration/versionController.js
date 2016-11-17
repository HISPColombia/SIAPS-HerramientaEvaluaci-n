appServersoft.controller('versionController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','version', function ($scope, $filter, commonvariable, authentication, $localStorage, version) {
///verify session
 //authentication.checkStatus();

///variables
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.veoid = 0;
        $scope.venumber=0;
    }
    $scope.initform();

    $scope.selectversion = function (veoid,venumber) {
        $scope.mode = 'edit';
        $scope.veoid = veoid;
        $scope.venumber = venumber;
    }
   
   $scope.getversion = function () {
        version.get({})
       .$promise.then(function (resp) {
           $scope.listversion = resp;
       });
    };

   $scope.getversion();

       $scope.deleteversion = function (veoid) {
        version.delete({veoid:veoid})
       .$promise.then(function (resp) {
           $scope.getversion();
           $scope.initform();
       });
    };

    $scope.saveversion = function (venumber) {
       version.post({venumber: venumber })
      .$promise.then(function (resp) {
          if (resp.venumber == venumber) {
              $scope.getversion();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };

    $scope.updateversion = function (veoid,venumber) {
        version.put({ veoid:veoid, venumber:venumber })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getversion();
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