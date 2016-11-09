appServersoft.controller('typefacilityController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','typefacility', function ($scope, $filter, commonvariable, authentication, $localStorage, typefacility) {
///verify session
 //authentication.checkStatus();

///variables
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.tfoid = 0;
        $scope.tfname = "";
    }
    $scope.initform();

    $scope.selectTypefacility = function (tfoid,tfname) {
        $scope.mode = 'edit';
        $scope.tfoid = tfoid;
        $scope.tfname = tfname;
   }

    $scope.getTypefacility = function () {
        typefacility.get({})
       .$promise.then(function (resp) {
           $scope.listTypefacility = resp;
       });
    };
   $scope.getTypefacility();

   $scope.deleteTypefacility = function (tfoid) {
        typefacility.delete({tfoid:tfoid})
       .$promise.then(function (resp) {
           $scope.getTypefacility();
           $scope.initform();
       });
    };

    $scope.saveTypefacility = function (tfname,roinitials) {
       typefacility.post({tfname: tfname})
      .$promise.then(function (resp) {
          if (resp.tfname == tfname) {
              $scope.getTypefacility();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };

    $scope.updateTypefacility = function (tfoid,tfname,roinitials) {
        typefacility.put({ tfoid:tfoid, tfname:tfname })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getTypefacility();
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