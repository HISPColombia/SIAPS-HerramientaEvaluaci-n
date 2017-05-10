appServersoft.controller('metricController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','attribute','metric', function ($scope, $filter, commonvariable, authentication, $localStorage, attribute,metric) {
///verify session
 //authentication.checkStatus();

///variables
$scope.lstEstados = [{ Descripcion: "Inactivo", ID: 0 },
                        { Descripcion: "Activo", ID: 1 },];
$scope.alerts = [];
var $translate = $filter('translate');

$scope.initform = function () {
        $scope.mode = 'create';
        $scope.meoid = 0;
        $scope.atoid = 0;  
        $scope.mename="";
        $scope.meformula="";
        $scope.mevaluemax = 0;
        $scope.mevaluemin = 0;
        $scope.melinebasevalref ="";
        $scope.metipeindicador=0;
    }
    $scope.initform();

    $scope.selectmetric = function (meoid,atoid,mename,meformula,mevaluemax,mevaluemin,melinebasevalref,metipeindicador) {
        $scope.mode = 'edit';
        $scope.meoid = meoid;
        var attri = $scope.listattribute.filter(function (item) {
            return item.atoid == atoid;
        });
        $scope.atoid = attri[0]; 
        $scope.mename= mename;
        $scope.meformula= meformula;
        $scope.mevaluemax = mevaluemax;
        $scope.mevaluemin = mevaluemin;
        $scope.melinebasevalref = melinebasevalref;
        $scope.metipeindicador= metipeindicador;
    }
   
    $scope.getmetric = function () {
        metric.get({})
       .$promise.then(function (resp) {
           $scope.listmetric = resp;
       });
    };

   $scope.getmetric();

       $scope.deletemetric = function (meoid) {
        metric.delete({meoid:meoid})
       .$promise.then(function (resp) {
           $scope.getmetric();
           $scope.initform();
       });
    };

    $scope.savemetric = function ( atoid,mename,meformula,mevaluemax,mevaluemin,melinebasevalref,metipeindicador) {
       metric.post({atoid: atoid.atoid, mename: mename, meformula: meformula, mevaluemax: mevaluemax, mevaluemin: mevaluemin, melinebasevalref: melinebasevalref,metipeindicador: metipeindicador })
      .$promise.then(function (resp) {
          if (resp.mename == mename) {
              $scope.getmetric();
              $scope.initform();          
          } 
          else {
              alert({ msg: $translate("MSG_ERROR")});
          }
      });
    };

    $scope.updatemetric = function (meoid,atoid,mename,meformula,mevaluemax,mevaluemin,melinebasevalref,metipeindicador) {
        metric.put({ meoid:meoid, atoid: atoid.atoid, mename: mename, meformula: meformula, mevaluemax: mevaluemax, mevaluemin: mevaluemin, melinebasevalref: melinebasevalref,metipeindicador: metipeindicador })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getmetric();
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

    $scope.getattribute = function () {
        attribute.get({})
       .$promise.then(function (resp) {
           $scope.listattribute = resp;
       });
    };
$scope.getattribute();
        
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };   
}]);