appServersoft.controller('featureController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','subdimension','feature', function ($scope, $filter, commonvariable, authentication, $localStorage, subdimension,feature) {
///verify session
 //authentication.checkStatus();

///variables
// $scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.feoid = 0;
        $scope.fename="";
    }
    $scope.initform();

    $scope.selectfeature = function (feoid, fename) {
        $scope.mode = 'edit';
        $scope.feoid = feoid;
        $scope.fename = fename;
    }
   
    $scope.getfeature = function () {
        feature.get({})
       .$promise.then(function (resp) {
           $scope.listfeature = resp;
       });
    };

   $scope.getfeature();

       $scope.deletefeature = function (feoid) {
        feature.delete({feoid:feoid})
       .$promise.then(function (resp) {
           $scope.getfeature();
           $scope.initform();
       });
    };

    $scope.savefeature = function (fename) {
       feature.post({fename: fename})
      .$promise.then(function (resp) {
          if (resp.fename == fename) {
              $scope.getfeature();
              //alert({ msg: $translate("MSG_SUCCESS") });
              $scope.initform();
          }
          else {
              alert({ msg: $translate("MSG_ERROR")});
          }
      });
    };

    $scope.updatefeature = function (fename) {
        feature.put({ feoid:$scope.feoid, fename:fename })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getfeature();
              //alert($translate("MSG_SUCCESS"));
              $scope.initform();
          }
          else {
              alert({ msg: $translate("MSG_ERROR")});
          }
      });
    };
    // $scope.addAlert = function (menssage) {
    //         $scope.alerts.push({ label: " ", msg: menssage });
    //     };

      
    //     $scope.closeAlert = function (index) {
    //         $scope.alerts.splice(index, 1);
    //     };   
}]);