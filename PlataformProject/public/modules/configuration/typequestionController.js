appServersoft.controller('typequestionController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','typequestion', function ($scope, $filter, commonvariable, authentication, $localStorage, typequestion) {
///verify session
 //authentication.checkStatus();

///variables
$scope.lstEstados = [{ Descripcion: "Inactivo", ID: 0 },
                        { Descripcion: "Activo", ID: 1 },];
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.tqoid = 0;
        $scope.tqdescription="";
        $scope.tqstate = 0;
    }
    $scope.initform();

    $scope.selecttypequestion = function (tqoid,tqdescription,tqstate) {
        $scope.mode = 'edit';
        $scope.tqoid = tqoid;
        $scope.tqdescription=tqdescription;
        var status = $scope.lstEstados.filter(function (item) {
            return item.ID == tqstate;
        });
        $scope.tqstate = status[0];
    }
   
   $scope.getEstado = function (id) {
        return $scope.lstEstados[id].Descripcion;
    };

    $scope.gettypequestion = function () {
        typequestion.get({})
       .$promise.then(function (resp) {
           $scope.listtypequestion = resp;
       });
    };

   $scope.gettypequestion();

       $scope.deletetypequestion = function (tqoid) {
        typequestion.delete({tqoid:tqoid})
       .$promise.then(function (resp) {
           $scope.gettypequestion();
           $scope.initform();
       });
    };

    $scope.savetypequestion = function (tqdescription,tqstate) {
       typequestion.post({tqdescription: tqdescription, tqstate: tqstate.ID})
      .$promise.then(function (resp) {
          if (resp.tqdescription == tqdescription) {
              $scope.gettypequestion();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };

    $scope.updatetypequestion = function (tqoid,tqdescription,tqstate) {
        typequestion.put({ tqoid:tqoid, tqdescription:tqdescription, tqstate:tqstate.ID })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.gettypequestion();
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
        
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };   
}]);