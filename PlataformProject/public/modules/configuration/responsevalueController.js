appServersoft.controller('responsevalueController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','variable','user','responsevalue', function ($scope, $filter, commonvariable, authentication, $localStorage,variable,user,responsevalue) {
///verify session
 //authentication.checkStatus();

///variables
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.rvoid = 0;
        $scope.vaoid = 0;
        $scope.rvvalue="";
        $scope.rvdate= "";
        $scope.usoid = 0;
    }
    $scope.initform();

    $scope.selectresponsevalue = function (rvoid,vaoid,rvvalue,rvdate,usoid) {
        $scope.mode = 'edit';
        $scope.rvoid = rvoid;
        var variable = $scope.listvariable.filter(function (item) {
            return item.vaoid == vaoid;
         });
        $scope.vaoid = variable[0];
        $scope.rvvalue=rvvalue;      
        $scope.rvdate = rvdate;
        var user = $scope.listuser.filter(function (item) {
            return item.usoid == usoid;
         });
         $scope.usoid = user[0];
    }
   
    $scope.getresponsevalue = function () {
        responsevalue.get({})
       .$promise.then(function (resp) {
           $scope.listresponsevalue = resp;
       });
    };

   $scope.getresponsevalue();

       $scope.deleteresponsevalue = function (rvoid) {
        responsevalue.delete({rvoid:rvoid})
       .$promise.then(function (resp) {
           $scope.getresponsevalue();
           $scope.initform();
       });
    };

    $scope.saveresponsevalue = function (vaoid,rvvalue,rvdate,usoid) {
       responsevalue.post({ vaoid:vaoid.vaoid, rvvalue: rvvalue, rvdate: rvdate, usoid:usoid.usoid })
      .$promise.then(function (resp) {
          if (resp.rvvalue == rvvalue) {
              $scope.getresponsevalue();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };

    $scope.updateresponsevalue = function (rvoid, vaoid, rvvalue, rvdate, usoid) {
        responsevalue.put({ rvoid:rvoid, vaoid:vaoid.vaoid, rvvalue: rvvalue, rvdate: rvdate, usoid:usoid.usoid  })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getresponsevalue();
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

    $scope.getvariable = function () {
        variable.get({})
       .$promise.then(function (resp) {
           $scope.listvariable = resp;
       });
    };
    $scope.getvariable();

    $scope.getvariableName = function (vaoid) {
        var variable = $scope.listvariable.filter(function (item) {
            return item.vaoid == vaoid;
         });
         return variable[0].vaname;
    };


    $scope.getuser = function () {
        user.get({})
       .$promise.then(function (resp) {
           $scope.listuser = resp;
       });
    };
    $scope.getuser();

    $scope.getuserName = function (usoid) {
        var user = $scope.listuser.filter(function (item) {
            return item.usoid == usoid;
         });
         return user[0].usname;
    };

        //DateTime
    $scope.open = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.opened = true;
    };
        
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };   
}]);