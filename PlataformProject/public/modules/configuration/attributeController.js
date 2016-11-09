appServersoft.controller('attributeController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','subfeature','attribute', function ($scope, $filter, commonvariable, authentication, $localStorage, subfeature,attribute) {
///verify session
//authentication.checkStatus();
///variables
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.atoid = 0;
        $scope.atname="";
        $scope.sfoid = 0;
    }
    $scope.initform();

    $scope.selectattribute = function (atoid, atname, sfoid) {
        $scope.mode = 'edit';
        $scope.atoid = atoid;
        $scope.atname = atname;
        $scope.sfoid = 1;
    }
   
    $scope.getattribute = function () {
        attribute.get({})
       .$promise.then(function (resp) {
           $scope.listattribute = resp;
       });
    };

   $scope.getattribute();
   
       $scope.deleteattribute = function (atoid) {
        attribute.delete({atoid:atoid})
       .$promise.then(function (resp) {
           $scope.getattribute();
           $scope.initform();
       });
    };

    $scope.saveattribute = function (atname,sfoid) {
       attribute.post({ atname: atname, sfoid: 1 })
      .$promise.then(function (resp) {
          if (resp.atname == atname) {
              $scope.getattribute();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };

    $scope.updateattribute = function (atoid,atname,sfoid) {
        attribute.put({ atoid:atoid, atname:atname, sfoid:1 })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getattribute();
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

    $scope.getsubfeature = function () {

        subfeature.get({})
       .$promise.then(function (resp) {
           $scope.listsubfeature = resp;
       });
    };

$scope.getsubfeature();
        
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };   
}]);