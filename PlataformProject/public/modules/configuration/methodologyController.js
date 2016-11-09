appServersoft.controller('methodologyController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','version','methodology', function ($scope, $filter, commonvariable, authentication, $localStorage, version,methodology) {
///verify session
 //authentication.checkStatus();

///variables
$scope.lstEstados = [{ Descripcion: "Inactivo", ID: 0 },
                        { Descripcion: "Activo", ID: 1 },];
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.meoid = 0;
        $scope.mename="";
        $scope.medescription="";
        $scope.mestatus = 0;
        $scope.veoid = 0;        
        $scope.meauthor = "";
    }
    $scope.initform();

    $scope.selectmethodology = function (meoid,mename,medescription,mestatus,veoid,meauthor) {
        $scope.mode = 'edit';
        $scope.meoid = meoid;
        $scope.mename= mename;
        $scope.medescription= medescription;
        var version = $scope.listversion.filter(function (item) {
            return item.veoid == veoid;
        });
        $scope.veoid = version[0]; 

      
        $scope.meauthor = meauthor;

        var status = $scope.lstEstados.filter(function (item) {
            return item.ID == mestatus;
        });
        $scope.mestatus = status[0];
    }
   
   $scope.getEstado = function (id) {
        return $scope.lstEstados[id].Descripcion;
    };

    $scope.getmethodology = function () {
        methodology.get({})
       .$promise.then(function (resp) {
           $scope.listmethodology = resp;
       });
    };

   $scope.getmethodology();

       $scope.deletemethodology = function (meoid) {
        methodology.delete({meoid:meoid})
       .$promise.then(function (resp) {
           $scope.getmethodology();
           $scope.initform();
       });
    };

    $scope.savemethodology = function ( mename,medescription,mestatus,veoid,meauthor) {
       methodology.post({mename: mename, medescription: medescription, mestatus: mestatus.ID, veoid: veoid.veoid, meauthor: meauthor })
      .$promise.then(function (resp) {
          if (resp.mename == mename) {
              $scope.getmethodology();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();          
          } 
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };

    $scope.updatemethodology = function (meoid,mename,medescription,mestatus,veoid,meauthor) {
        methodology.put({ meoid:meoid, mename: mename, medescription: medescription, mestatus: mestatus.ID, veoid: veoid.veoid, meauthor: meauthor })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getmethodology();
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

    $scope.getversion = function () {
        version.get({})
       .$promise.then(function (resp) {
           $scope.listversion = resp;
       });
    };
$scope.getversion();
        
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };   
}]);