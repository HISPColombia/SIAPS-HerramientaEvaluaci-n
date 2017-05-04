appServersoft.controller('facilityprojectController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','facilityproject','project','facility', function ($scope, $filter, commonvariable, authentication, $localStorage, facilityproject, project, facility ) {
///verify session
//authentication.checkStatus();
///variables
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.facproid = 0;
        $scope.proid=0;
        $scope.faoid = 0;
    }
    $scope.initform();

    $scope.selectfacilityproject = function (facproid, proid, faoid) {
        $scope.mode = 'edit';
        $scope.facproid= facproid;
         var pr = $scope.listproject.filter(function (item) {
            return item.proid == proid;
        });
        $scope.proid = pr[0];

        var sys = $scope.listFacility.filter(function (item) {
            return item.faoid == faoid;
        });
        $scope.faoid = sys[0];
   }
    $scope.getproject = function () {
        project.get({})
       .$promise.then(function (resp) {
           $scope.listproject = resp;
       });
    };
   $scope.getproject();

   $scope.getfacility = function () {
        facility.get({})
       .$promise.then(function (resp) {
           $scope.listFacility = resp;
       });
    };
   $scope.getfacility();
   
   $scope.deletefacilityproject = function () {
    facilityproject.delete({facproid: $scope.facproid})
      .$promise.then(function (resp) {
          $scope.getproject();
           $scope.initform();
       });
   };

    $scope.savefacilityproject = function (proid,faoid) {
       facilityproject.post({ proid: proid.proid, faoid: faoid.faoid })
      .$promise.then(function (resp) {
          if (resp.faoid > 0) {
              $scope.getfacilityproject();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };

    $scope.updatefacilityproject = function (proid,faoid) {
        facilityproject.put({ facproid:$scope.facproid, proid: proid.proid, faoid: faoid.faoid })
        .$promise.then(function (resp) {
          if (resp.facproid > 0) {
              $scope.getfacilityproject();
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

   $scope.getfacilityproject = function () {
         facilityproject.get({})
        .$promise.then(function (resp) {
            $scope.listFacilityproject = resp;
        });
     };
    $scope.getfacilityproject();


  $scope.getNameProject = function (proid) {
      if(proid > 0){
        var proid = $scope.listproject.filter(function (item) {
            return item.proid == proid;
         });
         return proid[0].prname;
      }
    };
    
  $scope.getNameFacility  = function (faoid) {
      if(faoid > 0){
        var faoid = $scope.listFacility.filter(function (item) {
            return item.faoid == faoid;
         });
         return faoid[0].faname;
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