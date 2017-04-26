appServersoft.controller('systemprojectController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','systemproject','project','system', function ($scope, $filter, commonvariable, authentication, $localStorage, systemproject, project, system ) {
///verify session
//authentication.checkStatus();
///variables
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.sysproid = 0;
        $scope.proid=0;
        $scope.sysoid = 0;
    }
    $scope.initform();

    $scope.selectsystemproject = function (sysproid, proid, sysoid) {
        $scope.mode = 'edit';
        $scope.sysproid= sysproid;
         var pr = $scope.listproject.filter(function (item) {
            return item.proid == proid;
        });
        $scope.proid = pr[0];

        var sys = $scope.listSystem.filter(function (item) {
            return item.sysoid == sysoid;
        });
        $scope.sysoid = sys[0];
   }
    $scope.getproject = function () {
        project.get({})
       .$promise.then(function (resp) {
           $scope.listproject = resp;
       });
    };
   $scope.getproject();

   $scope.getSystem = function () {
        system.get({})
       .$promise.then(function (resp) {
           $scope.listSystem = resp;
       });
    };
   $scope.getSystem();
   
   $scope.deletesystemproject = function () {
    systemproject.delete({sysproid: $scope.sysproid})
      .$promise.then(function (resp) {
          $scope.getproject();
           $scope.initform();
       });
   };

    $scope.savesystemproject = function (proid,sysoid) {
       systemproject.post({ proid: proid.proid, sysoid: sysoid.sysoid })
      .$promise.then(function (resp) {
          if (resp.sysoid > 0) {
              $scope.getsystemproject();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };

    $scope.updatesystemproject = function (proid,sysoid) {
        systemproject.put({ sysproid:$scope.sysproid, proid: proid.proid, sysoid: sysoid.sysoid })
        .$promise.then(function (resp) {
          if (resp.sysproid > 0) {
              $scope.getsystemproject();
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

   $scope.getsystemproject = function () {
         systemproject.get({})
        .$promise.then(function (resp) {
            $scope.listsystemproject = resp;
        });
     };
    $scope.getsystemproject();


  $scope.getNameProject = function (proid) {
      if(proid > 0){
        var proid = $scope.listproject.filter(function (item) {
            return item.proid == proid;
         });
         return proid[0].prname;
      }
    };
    
  $scope.getnameSystem  = function (sysoid) {
      if(sysoid > 0){
        var sysoid = $scope.listSystem.filter(function (item) {
            return item.sysoid == sysoid;
         });
         return sysoid[0].sysname;
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