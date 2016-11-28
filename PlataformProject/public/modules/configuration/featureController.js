appServersoft.controller('featureController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','subdimension','feature', function ($scope, $filter, commonvariable, authentication, $localStorage, subdimension,feature) {
///verify session
 //authentication.checkStatus();

///variables
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.feoid = 0;
        $scope.fename="";
        $scope.suoid = 0;
    }
    $scope.initform();

    $scope.selectfeature = function (feoid, fename, suoid) {
        $scope.mode = 'edit';
        $scope.feoid = feoid;
        $scope.fename = fename;
        $scope.suoid = suoid;

        var sd = $scope.listsubdimension.filter(function (item) {
            return item.suoid == suoid;
         });
        $scope.suoid = sd[0];

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

    $scope.savefeature = function (fename,suoid) {
       feature.post({fename: fename, suoid: suoid.suoid})
      .$promise.then(function (resp) {
          if (resp.fename == fename) {
              $scope.getfeature();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };

    $scope.updatefeature = function (feoid,fename,suoid) {
        feature.put({ feoid:feoid, fename:fename, suoid: suoid.suoid })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getfeature();
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

    $scope.getName = function (suoid) {
      if(suoid > 0){
        var sd = $scope.listsubdimension.filter(function (item) {
            return item.suoid == suoid;
         });
         return sd[0].suname;
      }
    };
        

    $scope.getsubdimension = function () {
        subdimension.get({})
       .$promise.then(function (resp) {
           $scope.listsubdimension = resp;
       });
    };
$scope.getsubdimension();
        
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };   
}]);