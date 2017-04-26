appServersoft.controller('projectController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','project','methodology', function ($scope, $filter, commonvariable, authentication, $localStorage, project, methodology) {
///verify session
//authentication.checkStatus();
///variables
$scope.lstEstados = [{ Descripcion: "Inactivo", ID: 0 },
                     { Descripcion: "Activo", ID: 1 },];
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.proid = 0;
        $scope.prname="";
        $scope.prstatus = 0;
        $scope.prdateend = null;
        $scope.meoid = 0;  
    }
    $scope.initform();

    $scope.selectproject = function (proid, prname, prstatus, prdateend, meoid) {
        $scope.mode = 'edit';
        $scope.proid = proid;
        $scope.prname = prname;
        $scope.prdateend = prdateend;

        var status = $scope.lstEstados.filter(function (item) {
            return item.ID == prstatus;
        });
        $scope.prstatus = status[0];

        var methodology = $scope.listmethodology.filter(function (item) {
            return item.meoid == meoid;
        });
        $scope.meoid = methodology[0]; 
   }
    $scope.getproject = function () {
        project.get({})
       .$promise.then(function (resp) {
           $scope.listproject = resp;
       });
    };
   $scope.getproject();

   $scope.getmethodology = function () {
        methodology.get({})
       .$promise.then(function (resp) {
           $scope.listmethodology = resp;
       });
    };
    $scope.getmethodology();
   
   $scope.deleteproject = function (proid) {
    project.delete({proid: proid})
      .$promise.then(function (resp) {
          $scope.getproject();
           $scope.initform();
       });
   };

 $scope.getEstado = function (id) {
        return $scope.lstEstados[id].Descripcion;
    };

    $scope.saveproject = function (prname,prstatus,prdateend,meoid) {
       project.post({ prname: prname, prstatus: prstatus.ID, prdateend: prdateend , meoid: meoid.meoid })
      .$promise.then(function (resp) {
          if (resp.prname == prname) {
              $scope.getproject();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };

    $scope.updateproject = function (proid, prname, prstatus, prdateend, meoid) {
        project.put({ proid: proid, prname: prname, prstatus: prstatus.ID, prdateend: prdateend, meoid: meoid.meoid })
        .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getproject();
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
      $scope.getNameMetodologia = function (meoid) {
      if(meoid > 0){
        var mt = $scope.listmethodology.filter(function (item) {
            return item.meoid == meoid;
         });
         return mt[0].medescription;
      }
    };



    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        }; 

}]);