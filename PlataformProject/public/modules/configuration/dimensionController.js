appServersoft.controller('dimensionController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','dimension', function ($scope, $filter, commonvariable, authentication, $localStorage, dimension) {
///verify session
 //authentication.checkStatus();

///variables
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.dioid = 0;
        $scope.diname = "";
    }
    $scope.initform();

    $scope.selectDimension = function (dioid,diname) {
        $scope.mode = 'edit';
        $scope.dioid = dioid;
        $scope.diname = diname;
   }

    $scope.getDimension = function () {
        dimension.get({})
       .$promise.then(function (resp) {
           $scope.listdimension = resp;
       });
    };
   $scope.getDimension();

   $scope.deleteDimension = function (dioid) {
        dimension.delete({dioid:dioid})
       .$promise.then(function (resp) {
           $scope.getDimension();
           $scope.initform();
       });
    };

    $scope.saveDimension = function (diname) {
       dimension.post({diname: diname})
      .$promise.then(function (resp) {
          if (resp.diname == diname) {
              $scope.getDimension();
              $scope.initform();
          }
          else {
              alert({ msg: $translate("MSG_ERROR")});
          }
      });
    };

    $scope.updateDimension = function (dioid,diname) {
        dimension.put({ dioid:dioid, diname:diname })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getDimension();
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
        
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };   
}]);