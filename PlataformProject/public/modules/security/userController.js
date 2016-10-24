appServersoft.controller('userController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','person','user', function ($scope, $filter, commonvariable, authentication, $localStorage, person,user) {
///verify session
 //authentication.checkStatus();

///variables
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.usoid = 0;
        $scope.usname="";
        $scope.uspassword = "";
        $scope.peoid = "";
        $scope.usstatus = "";
    }
    $scope.initform();

    $scope.selectUser = function (usoid,usname,uspassword,peoid,usstatus) {
        $scope.mode = 'edit';
        $scope.usoid = usoid;
        $scope.uspassword = uspassword;
        $scope.usname=usname;
        $scope.peoid = peoid;
        $scope.usstatus = usstatus;
    }

    $scope.getUser = function () {
        user.get({})
       .$promise.then(function (resp) {
           $scope.listUser = resp;
       });
    };
   $scope.getUser();

       $scope.deleteUser = function (usoid) {
        user.delete({usoid:usoid})
       .$promise.then(function (resp) {
           $scope.getUser();
           $scope.initform();
       });
    };

    $scope.saveUser = function (usname,uspassword,peoid,usstatus) {
       user.post({usname: usname, uspassword: uspassword, peoid: peoid, usstatus: usstatus})
      .$promise.then(function (resp) {
          if (resp.uspassword == uspassword) {
              $scope.getUser();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };

    $scope.updateUser = function (usoid,usname,uspassword,peoid,usstatus) {
        user.put({ usoid:usoid, uspassword:uspassword ,usname:usname ,peoid:peoid, usstatus:usstatus })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getUser();
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

    $scope.getPerson = function () {
        person.get({})
       .$promise.then(function (resp) {
           $scope.listPerson = resp;
       });
    };
$scope.getPerson();
        
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };   
}]);