appServersoft.controller('methodController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','methodology','method', function ($scope, $filter, commonvariable, authentication, $localStorage, methodology,method) {
///verify session
 //authentication.checkStatus();

///variables
$scope.lstEstados = [{ Descripcion: "Inactivo", ID: 0 },
                        { Descripcion: "Activo", ID: 1 },];
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.mtoid = 0;
        $scope.mtname="";
        $scope.mtdescription="";
        $scope.meoid = 0;        
    }
    $scope.initform();

    $scope.selectmethod = function (mtoid,mtname,mtdescription,meoid) {
        $scope.mode = 'edit';
        $scope.mtoid = mtoid;
        $scope.mtname= mtname;
        $scope.mtdescription= mtdescription;

        var methodology = $scope.listmethodology.filter(function (item) {
            return item.meoid == meoid.meoid;
        });
        $scope.meoid = methodology[0]; 
    }
   
    $scope.getmethod = function () {
        method.get({})
       .$promise.then(function (resp) {
           $scope.listmethod = resp;
       });
    };

   $scope.getmethod();

       $scope.deletemethod = function (mtoid) {
        method.delete({mtoid:mtoid})
       .$promise.then(function (resp) {
           $scope.getmethod();
           $scope.initform();
       });
    };

    $scope.savemethod = function ( mtname,mtdescription,meoid) {
       method.post({mtname: mtname, mtdescription: mtdescription, meoid: meoid.meoid })
      .$promise.then(function (resp) {
          if (resp.mtname == mtname) {
              $scope.getmethod();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();          
          } 
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };

    $scope.updatemethod = function (mtoid,mtname,mtdescription,meoid) {
        method.put({ mtoid:mtoid, mtname: mtname, mtdescription: mtdescription, meoid: meoid.meoid })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getmethod();
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

    $scope.getmethodology = function () {
        methodology.get({})
       .$promise.then(function (resp) {
           $scope.listmethodology = resp;
       });
    };
    $scope.getmethodology();
        
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };   
}]);