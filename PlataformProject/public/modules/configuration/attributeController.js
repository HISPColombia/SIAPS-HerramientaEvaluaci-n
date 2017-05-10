appServersoft.controller('attributeController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','subfeature','attribute','subfeaturelist', function ($scope, $filter, commonvariable, authentication, $localStorage, subfeature,attribute,subfeaturelist) {
///verify session
//authentication.checkStatus();
///variables
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.atoid = 0;
        $scope.atname="";
        $scope.sfoid = 0;
    }
    $scope.initform();

    $scope.selectattribute = function (atoid, atname, sfoid) {
        $scope.mode = 'edit';
        $scope.atoid = atoid;
        $scope.atname = atname;
        var sf = $scope.listsubfeature.filter(function (item) {
            return item.sfoid == sfoid;
         });
        $scope.sfoid = sf[0];    


}
   
    $scope.getattribute = function () {
        attribute.get({})
       .$promise.then(function (resp) {
           $scope.listattribute = resp;
       });
    };

   $scope.getattribute();
   
       $scope.deleteattribute = function (atoid) {
        attribute.delete({atoid:atoid})
       .$promise.then(function (resp) {
           $scope.getattribute();
           $scope.initform();
       });
    };

    $scope.saveattribute = function (atname,sfoid) {
       attribute.post({ atname: atname, sfoid: sfoid.sfoid })
      .$promise.then(function (resp) {
          if (resp.atname == atname) {
              $scope.getattribute();
              $scope.initform();
          }
          else {
             alert({ msg: $translate("MSG_ERROR")});
          }
      });
    };

    $scope.updateattribute = function (atoid,atname,sfoid) {
        attribute.put({ atoid:atoid, atname:atname, sfoid: sfoid.sfoid })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getattribute();
              $scope.initform();
          }
          else {
              alert({ msg: $translate("MSG_ERROR")});
          }
      });
    };
            $scope.addAlert = function (menssage) {
            $scope.alerts.push({ label: " ", msg: menssage });
        };

    $scope.getsubfeature = function () {
        subfeaturelist.get({})
       .$promise.then(function (resp) {
           $scope.listsubfeature = resp;
       });
    };
  $scope.getName = function (sfoid) {
      if(sfoid > 0){
        var sfeature = $scope.listsubfeature.filter(function (item) {
            return item.sfoid == sfoid;
         });
         return sfeature[0].sfname+' '+ sfeature[0].suname;
      }
    };
$scope.getsubfeature();
        
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };   
}]);