appServersoft.controller('rolesubdimensionController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','subdimension','role','rolesubdimension', function ($scope, $filter, commonvariable, authentication, $localStorage,subdimension,role,rolesubdimension) {
///verify session
 //authentication.checkStatus();

///variables
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.rsoid = 0;
        $scope.suoid = 0;
        $scope.rooid = 0;
    }
    $scope.initform();
    $scope.getrole = function () {
        role.get({})
       .$promise.then(function (resp) {
           $scope.listrole = resp;
       });
    };
    $scope.getrole();

    $scope.getroleName = function (rooid) {
        var role = $scope.listrole.filter(function (item) {
            return item.rooid == rooid;
         });
         return role[0].rodescription;
    };
    $scope.getsubdimension = function () {
        subdimension.get({})
       .$promise.then(function (resp) {
           $scope.listsubdimension = resp;
       });
    };
    $scope.getsubdimension();

    $scope.getsubdimensionName = function (suoid) {
        var subdimension = $scope.listsubdimension.filter(function (item) {
            return item.suoid == suoid;
         });
         return subdimension[0].suname;
    };

    $scope.selectrolesubdimension = function (rsoid,suoid,rooid) {
        $scope.mode = 'edit';
        $scope.rsoid = rsoid;
        var subdimension = $scope.listsubdimension.filter(function (item) {
            return item.suoid == suoid;
         });
        $scope.suoid = subdimension[0];
        
        var role = $scope.listrole.filter(function (item) {
            return item.rooid == rooid;
         });
         $scope.rooid = role[0];
    }
   
    $scope.getrolesubdimension = function () {
        rolesubdimension.get({})
       .$promise.then(function (resp) {
           $scope.listrolesubdimension = resp;
       });
    };

   $scope.getrolesubdimension();

       $scope.deleterolesubdimension = function (rsoid) {
        rolesubdimension.delete({rsoid:rsoid})
       .$promise.then(function (resp) {
           $scope.getrolesubdimension();
           $scope.initform();
       });
    };

    $scope.saverolesubdimension = function (suoid,rooid) {
       rolesubdimension.post({ suoid:suoid.suoid, rooid:rooid.rooid })
      .$promise.then(function (resp) {
     $scope.getrolesubdimension();
          if (resp.suoid == suoid) {
              $scope.initform();
          }
          else {
              alert({ msg: $translate("MSG_ERROR")});
          }
      });
    };

    $scope.updaterolesubdimension = function (rsoid,suoid,rooid) {
        rolesubdimension.put({ rsoid:rsoid, suoid:suoid.suoid, rooid:rooid.rooid })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getrolesubdimension();
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