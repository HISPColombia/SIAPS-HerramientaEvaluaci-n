appServersoft.controller('optionquestionController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','question','optionquestion', function ($scope, $filter, commonvariable, authentication, $localStorage, question,optionquestion) {
///verify session
//authentication.checkStatus();
///variables
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.oqoid = 0;
        $scope.quoid = 0;
        $scope.oqdescription="";
    }
    $scope.initform();

    $scope.selectoptionquestion = function (oqoid, quoid, oqdescription ) {
        $scope.mode = 'edit';
        $scope.oqoid = oqoid;
        $scope.oqdescription = oqdescription;
        var option = $scope.listquestion.filter(function (item) {
            return item.quoid == quoid;
         });
        $scope.quoid = option[0];
    }
   
    $scope.getoptionquestion = function () {
        optionquestion.get({})
       .$promise.then(function (resp) {
           $scope.listoptionquestion = resp;
       });
    };

   $scope.getoptionquestion();
  
   $scope.deleteoptionquestion = function (oqoid) {
        optionquestion.delete({oqoid:oqoid})
       .$promise.then(function (resp) {
           $scope.getoptionquestion();
           $scope.initform();
       });
    };

    $scope.saveoptionquestion = function (quoid, oqdescription) {
       optionquestion.post({ oqdescription: oqdescription, quoid: quoid.quoid })
      .$promise.then(function (resp) {
          if (resp.oqdescription == oqdescription) {
              $scope.getoptionquestion();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };

    $scope.updateoptionquestion = function (oqoid, quoid, oqdescription) {
        optionquestion.put({ oqoid:oqoid, quoid: quoid.quoid, oqdescription:oqdescription })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getoptionquestion();
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

    $scope.getquestion = function () {

        question.get({})
       .$promise.then(function (resp) {
           $scope.listquestion = resp;
       });
    };

$scope.getquestion();

$scope.getquestionName = function (quoid) {
        var q = $scope.listquestion.filter(function (item) {
            return item.quoid == quoid;
         });
         return q[0].ququestion;
    };      
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };   
}]);