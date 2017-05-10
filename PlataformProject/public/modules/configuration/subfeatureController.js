appServersoft.controller('subfeatureController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','feature','subfeature','featuresubdimension', function ($scope, $filter, commonvariable, authentication, $localStorage, feature,subfeature,featuresubdimension) {
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
        var fe = $scope.listfeature.filter(function (item) {
            return item.feoid == feoid;
         });
        $scope.feoid = fe[0];

    }
   
    $scope.deletesubfeature = function (sfoid) {
        subfeature.delete({sfoid:sfoid})
       .$promise.then(function (resp) {
           $scope.getsubfeature();
           $scope.initform();
       });
    };

    $scope.savesubfeature = function (sfname,feoid) {
       subfeature.post({ sfname: sfname, feoid: feoid.feoid })
      .$promise.then(function (resp) {
          if (resp.sfname == sfname) {
              $scope.getsubfeature();
              $scope.initform();
          }
          else {
              alert({ msg: $translate("MSG_ERROR")});
          }
      });
    };

    $scope.updatesubfeature = function (sfoid,sfname,feoid) {
        subfeature.put({ sfoid:sfoid, sfname:sfname, feoid: feoid.feoid })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getsubfeature();
              $scope.initform();
          }
          else {
              alert({ msg: $translate("MSG_ERROR")});
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
        $scope.getsubfeature = function () {
        subfeature.get({})
       .$promise.then(function (resp) {
           $scope.listsubfeature = resp;
       });
    };

   $scope.getsubfeature();

    $scope.getNameFeature = function (feoid) {
        var feature = $scope.listfeature.filter(function (item) {
            return item.feoid == feoid;
         });
         return feature[0].fename;
    };
       
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };   
}]);