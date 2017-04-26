appServersoft.controller('participationController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','participation','project','facility','PHCPhase', function ($scope, $filter, commonvariable, authentication, $localStorage, participation, project, facility, PHCPhase ) {
///verify session
//authentication.checkStatus();
///variables
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.ptoid = 0;
        $scope.faoid = 0;
        $scope.proid=0;
        $scope.phoid = 0;
    }
    $scope.initform();

    $scope.selectparticipation = function (ptoid,proid,faoid,phoid) {
        $scope.mode = 'edit';
        $scope.ptoid = ptoid;
        var pr = $scope.listproject.filter(function (item) {
            return item.proid == proid;
        });
        $scope.proid = pr[0];

        var fa = $scope.listFacility.filter(function (item) {
            return item.faoid == faoid;
        });
        $scope.faoid = fa[0];

        var ph = $scope.listPh.filter(function (item) {
            return item.phoid == phoid;
        });
        $scope.phoid = ph[0];
   }


    $scope.getproject = function () {
        project.get({})
       .$promise.then(function (resp) {
           $scope.listproject = resp;
       });
    };
   $scope.getproject();

   $scope.getFacility = function () {
        facility.get({})
        .$promise.then(function (resp) {
            $scope.listFacility = resp;
        });
     };
   $scope.getFacility();

   $scope.getPHCPhase = function () {
          PHCPhase.get({})
         .$promise.then(function (resp) {
              $scope.listPh = resp;
        });
     };
   $scope.getPHCPhase();

 $scope.deleteparticipation = function () {
    participation.delete({ptoid: $scope.ptoid })
      .$promise.then(function (resp) {
          $scope.getparticipation();
           $scope.initform();
       });
   };
 $scope.saveparticipation = function (proid,faoid,phoid) {
       participation.post({ proid: proid.proid, faoid: faoid.faoid, phoid: phoid.phoid })
      .$promise.then(function (resp) {
          if (resp.ptoid > 0) {
              $scope.getparticipation();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };
    // $scope.updateproject = function (proid, prname, prstatus, prdateend, meoid) {
    //     project.put({ proid: proid, prname: prname, prstatus: prstatus.ID, prdateend: prdateend, meoid: meoid.meoid })
    //     .$promise.then(function (resp) {
    //       if (resp.length > 0) {
    //           $scope.getproject();
    //           $scope.alerts.push({ msg: $translate("BED_MSG_SUCCESS"), type: 'success' });
    //           $scope.initform();
    //       }
    //       else {
    //           $scope.alerts.push({ msg: $translate("BED_MSG_ERROR"), type: 'error' });
    //       }
    //   });
    // };


    $scope.updateparticipation = function (ptoid,proid,faoid,phoid) {
        participation.put({ ptoid: ptoid, proid: proid.proid, faoid: faoid.faoid, phoid: phoid.phoid  })
        .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getparticipation();
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


    $scope.getparticipation = function () {
         participation.get({})
        .$promise.then(function (resp) {
            $scope.listparticipation = resp;
        });
     };
    $scope.getparticipation();
        

  $scope.getProjectName = function (proid) {
       if(proid > 0){
         var project = $scope.listproject.filter(function (item) {
             return item.proid == proid;
          });
          return project[0].prname;
       }
     };
 $scope.getFacName = function (faoid) {
       if(faoid > 0){
         var fa = $scope.listFacility.filter(function (item) {
             return item.faoid == faoid;
          });
          return fa[0].faname;
       }
     };
     
$scope.getPhName = function (phoid) {
       if(phoid > 0){
         var ph = $scope.listPh.filter(function (item) {
             return item.phoid == phoid;
          });
          return ph[0].phcDescription;
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