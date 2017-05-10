appServersoft.controller('subdimensionController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','dimension','subdimension', function ($scope, $filter, commonvariable, authentication, $localStorage, dimension,subdimension) {
///verify session
 //authentication.checkStatus();

///variables
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.suoid = 0;
        $scope.suname="";
        $scope.dioid = 0;
   }
    $scope.initform();

    $scope.selectSubdimension = function (suoid,suname,dioid) {
        $scope.mode = 'edit';
        $scope.suoid = suoid;
        $scope.suname=suname;
        var dm = $scope.listDimension.filter(function (item) {
            return item.dioid == dioid;
         });
        $scope.dioid = dm[0];

    }
   
    $scope.getSubdimension = function () {
        subdimension.get({})
       .$promise.then(function (resp) {
           $scope.listSubdimension = resp;
       });
    };

   $scope.getSubdimension();

       $scope.deleteSubdimension = function (suoid) {
        subdimension.delete({suoid:suoid})
       .$promise.then(function (resp) {
           $scope.getSubdimension();
           $scope.initform();
       });
    };

    $scope.saveSubdimension = function (suname,dioid) {
       subdimension.post({ suname: suname, dioid: dioid.dioid })
      .$promise.then(function (resp) {
          if (resp.suname == suname) {
              $scope.getSubdimension();
              $scope.getSubdimension();
              $scope.initform();
          }
          else {
              alert({ msg: $translate("MSG_ERROR")});
          }
      });
    };

    $scope.updateSubdimension = function (suoid, suname, dioid) {
        subdimension.put({ suoid: suoid, suname: suname, dioid: dioid.dioid })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getSubdimension();
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

    $scope.getDimension = function () {
        dimension.get({})
       .$promise.then(function (resp) {
           $scope.listDimension = resp;
       });
    };
      $scope.getName = function (dioid) {
      if(dioid > 0){
        var dn = $scope.listDimension.filter(function (item) {
            return item.dioid == dioid;
         });
         return dn[0].diname;
      }
    };
$scope.getDimension();
        
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };   
}]);