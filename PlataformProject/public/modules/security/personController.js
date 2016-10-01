appServersoft.controller('personController', ['$scope', '$filter', 'commonvariable', 'authentication','person', function ($scope, $filter, commonvariable, authentication, person) {
///verify session
 //authentication.checkStatus();

///variables
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.peoid = 0;
        $scope.peidentify = "";
        $scope.pename="";
        $scope.pesurname = "";
        $scope.pestudies = "";
        $scope.peprofdescription = "";
        $scope.pemail = "";
        $scope.petelephon = "";
    }
    $scope.initform();

    $scope.selectPerson = function (peoid,peidentify,pename,pesurname,pestudies,peprofdescription,pemail,petelephon) {
        $scope.mode = 'edit';
        $scope.peoid = peoid;
        $scope.peidentify = peidentify;
        $scope.pename=pename;
        $scope.pesurname = pesurname;
        $scope.pestudies = pestudies;
        $scope.peprofdescription = peprofdescription;
        $scope.pemail = pemail;
        $scope.petelephon = petelephon;
    }

    $scope.getPerson = function () {
        person.get({idper:'peoid'})
       .$promise.then(function (resp) {
           $scope.person = resp;
       });
    };
   // $scope.getPerson();

    $scope.savePerson = function (peidentify,pename,pesurname,pestudies,peprofdescription,pemail,petelephon) {
       person.post({peidentify: peidentify, pename: pename, pesurname: pesurname, pestudies: pestudies, peprofdescription: peprofdescription, pemail: pemail, petelephon: petelephon})
      .$promise.then(function (resp) {
          if (resp.peidentify == peidentify) {
              $scope.getPerson();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
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