appServersoft.controller('facilityController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','typefacility','facility', function ($scope, $filter, commonvariable, authentication, $localStorage, typefacility,facility) {
///verify session
//authentication.checkStatus();
///variables
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.faoid = 0;
        $scope.faname="";
        $scope.tfoid = 0;
    }
    $scope.initform();
    $scope.gettypefacility = function () {
        
                typefacility.get({})
               .$promise.then(function (resp) {
                   $scope.listtypefacility = resp;
               });
            };
        
        $scope.gettypefacility();
        
          $scope.getName = function (tfoid) {
              if(tfoid > 0){
                var feature = $scope.listtypefacility.filter(function (item) {
                    return item.tfoid == tfoid;
                 });
                 return feature[0].tfname;
              }
            };
                
    $scope.selectfacility = function (faoid, faname, tfoid) {
        $scope.mode = 'edit';
        $scope.faoid = faoid;
        $scope.faname = faname;
        var fc = $scope.listtypefacility.filter(function (item) {
            return item.tfoid == tfoid;
         });
        $scope.tfoid = fc[0];
   }
    $scope.getfacility = function () {
        facility.get({})
       .$promise.then(function (resp) {
           $scope.listfacility = resp;
       });
    };

   $scope.getfacility();
   
       $scope.deletefacility = function (faoid) {
        facility.delete({faoid:faoid})
       .$promise.then(function (resp) {
           $scope.getfacility();
           $scope.initform();
       });
    };

    $scope.savefacility = function (faname,tfoid) {
       facility.post({ faname: faname, tfoid: tfoid.tfoid  })
      .$promise.then(function (resp) {
          if (resp.faname == faname) {
              $scope.getfacility();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };

    $scope.updatefacility = function (faoid,faname,tfoid) {
        facility.put({ faoid:faoid, faname:faname, tfoid: tfoid })
        .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getfacility();
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