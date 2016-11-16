appServersoft.controller('questionController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','method','feature','question', function ($scope, $filter, commonvariable, authentication, $localStorage,method,feature,question) {
///verify session
 //authentication.checkStatus();

///variables
$scope.alerts = [];
var $translate = $filter('translate');
   $scope.initform = function () {
        $scope.mode = 'create';
        $scope.quoid = 0;
        $scope.qucode="";
        $scope.ququestion = "";
        $scope.mtoid = 0;
        $scope.feoid = 0;
    }
    $scope.initform();

    $scope.selectquestion = function (quoid,qucode,ququestion,mtoid,feoid) {
        $scope.mode = 'edit';
        $scope.quoid = quoid;
        $scope.ququestion = ququestion;
        $scope.qucode=qucode;
        var method = $scope.listMethod.filter(function (item) {
            return item.mtoid == mtoid;
         });
        $scope.mtoid = method[0];
        
        var feature = $scope.listFeature.filter(function (item) {
            return item.feoid == feoid;
         });
         $scope.feoid = feature[0];
    }
   
    $scope.getquestion = function () {
        question.get({})
       .$promise.then(function (resp) {
           $scope.listquestion = resp;
       });
    };

   $scope.getquestion();

       $scope.deletequestion = function (quoid) {
        question.delete({quoid:quoid})
       .$promise.then(function (resp) {
           $scope.getquestion();
           $scope.initform();
       });
    };

    $scope.savequestion = function (qucode,ququestion,mtoid,feoid) {
       question.post({qucode: qucode, ququestion: ququestion, mtoid:mtoid.mtoid, feoid:feoid.feoid })
      .$promise.then(function (resp) {
          if (resp.qucode == qucode) {
              $scope.getquestion();
              $scope.alerts.push({ msg: $translate("ROOM_MSG_SUCCESS"), type: 'success' });
              $scope.initform();
          }
          else {
              $scope.alerts.push({ msg: $translate("ROOM_MSG_ERROR"), type: 'error' });
          }
      });
    };

    $scope.updatequestion = function (quoid,qucode,ququestion,mtoid,feoid) {
        question.put({ quoid:quoid, qucode:qucode,ququestion:ququestion ,mtoid:mtoid.mtoid, feoid:feoid.feoid })
      .$promise.then(function (resp) {
          if (resp.length > 0) {
              $scope.getquestion();
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

    $scope.getMethod = function () {
        method.get({})
       .$promise.then(function (resp) {
           $scope.listMethod = resp;
       });
    };
    $scope.getMethod();

    $scope.getMethodName = function (mtoid) {
        var method = $scope.listMethod.filter(function (item) {
            return item.mtoid == mtoid;
         });
         return method[0].mtname;
    };


    $scope.getFeature = function () {
        feature.get({})
       .$promise.then(function (resp) {
           $scope.listFeature = resp;
       });
    };
    $scope.getFeature();

    $scope.getFeatureName = function (feoid) {
        var feature = $scope.listFeature.filter(function (item) {
            return item.feoid == feoid;
         });
         return feature[0].fename;
    };
        
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };   
}]);