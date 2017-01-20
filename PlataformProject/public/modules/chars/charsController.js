appServersoft.controller('charsController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','person', function ($scope, $filter, commonvariable, authentication, $localStorage, person) {
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

    $scope.selectPerson = function (peoid,peidentify,pename,pesurname,pemail,pestudies,peprofdescription,petelephon) {
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
        person.get({})
       .$promise.then(function (resp) {
           $scope.listPerson = resp;
       });
    };
   $scope.getPerson();

       $scope.deletePerson = function (peoid) {
        person.delete({peoid:peoid})
       .$promise.then(function (resp) {
           $scope.getPerson();
           $scope.initform();
       });
    };

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

    $scope.updatePerson = function (peoid,peidentify,pename,pesurname,pemail,pestudies,peprofdescription,petelephon) {
        person.put({ peoid:peoid, peidentify:peidentify ,pename:pename ,pesurname:pesurname, pemail:pemail ,pestudies:pestudies ,peprofdescription:peprofdescription ,petelephon:petelephon })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getPerson();
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