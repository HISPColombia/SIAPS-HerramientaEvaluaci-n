appServersoft.controller('subfeatureController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','feature','subfeature', function ($scope, $filter, commonvariable, authentication, $localStorage, feature,subfeature) {
///verify session
//authentication.checkStatus();
///variables
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.sfoid = 0;
        $scope.sfname="";
        $scope.feoid = 0;
    }
    $scope.initform();

    $scope.selectsubfeature = function (sfoid, sfname, feoid) {
        $scope.mode = 'edit';
        $scope.sfoid = sfoid;
        $scope.sfname = sfname;
        $scope.feoid = 1;
    }
   
    $scope.getsubfeature = function () {
        subfeature.get({})
       .$promise.then(function (resp) {
           $scope.listsubfeature = resp;
       });
    };

   $scope.getsubfeature();
   
       $scope.deletesubfeature = function (sfoid) {
        subfeature.delete({sfoid:sfoid})
       .$promise.then(function (resp) {
           $scope.getsubfeature();
           $scope.initform();
       });
    };

    $scope.savesubfeature = function (sfname,feoid) {
       subfeature.post({ sfname: sfname, feoid: 5 })
      .$promise.then(function (resp) {
          if (resp.sfname == sfname) {
              $scope.getsubfeature();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };

    $scope.updatesubfeature = function (sfoid,sfname,feoid) {
        subfeature.put({ sfoid:sfoid, sfname:sfname, feoid:5 })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getsubfeature();
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

    $scope.getfeature = function () {

        feature.get({})
       .$promise.then(function (resp) {
           $scope.listfeature = resp;
       });
    };

$scope.getfeature();
        
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };   
}]);