appServersoft.controller('variableController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','variable','metric', function ($scope, $filter, commonvariable, authentication, $localStorage, variable,metric) {
///verify session
 //authentication.checkStatus();

///variables
$scope.lstEstados = [{ Descripcion: "Inactivo", ID: 0 },
                        { Descripcion: "Activo", ID: 1 },];
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.vaoid = 0;
        $scope.meoid = 0;    
        $scope.vaname="";
        $scope.vatypevalue="";
    }
    $scope.initform();

    $scope.selectvariable = function (vaoid,meoid,vaname,vatypevalue) {
        $scope.mode = 'edit';
        $scope.vaoid = vaoid;
        $scope.vaname= vaname;
        $scope.vatypevalue= vatypevalue;

        var metric = $scope.listmetric.filter(function (item) {
            alert(meoid.meoid)
            return item.meoid == meoid.meoid;
        });
        $scope.meoid = metric[0]; 
    }
   
    $scope.getvariable = function () {
        variable.get({})
       .$promise.then(function (resp) {
           $scope.listvariable = resp;
       });
    };

   $scope.getvariable();

   $scope.deletevariable = function (vaoid) {
        variable.delete({vaoid:vaoid})
       .$promise.then(function (resp) {
           $scope.getvariable();
           $scope.initform();
       });
    };

    $scope.savevariable = function ( meoid,vaname,vatypevalue) {
       variable.post({meoid: meoid.meoid, vaname: vaname, vatypevalue: vatypevalue })
      .$promise.then(function (resp) {
          if (resp.vaname == vaname) {
              $scope.getvariable();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();          
          } 
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };

    $scope.updatevariable = function (vaoid,meoid,vaname,vatypevalue) {
        variable.put({ vaoid:vaoid, meoid: meoid.meoid, vaname: vaname, vatypevalue: vatypevalue })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getvariable();
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

    $scope.getmetric = function () {
        metric.get({})
       .$promise.then(function (resp) {
           $scope.listmetric = resp;
       });
    };
$scope.getmetric();
        
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };   
}]);