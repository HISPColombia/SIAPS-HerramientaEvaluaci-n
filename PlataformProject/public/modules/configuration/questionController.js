appServersoft.controller('questionController', ['$scope', '$filter', 'commonvariable', 'authentication','$localStorage','method','metric','typequestion','question', function ($scope, $filter, commonvariable, authentication, $localStorage,method,metric,typequestion,question) {
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
        $scope.meoid = 0;
    }
    $scope.initform();

    $scope.selectquestion = function (quoid,qucode,ququestion,mtoid,meoid,tqoid,optionquestion) {
        $scope.mode = 'edit';
        $scope.quoid = quoid;
        $scope.ququestion = ququestion;
        $scope.optionquestion= optionquestion;
        $scope.qucode=qucode;
        var method = $scope.listMethod.filter(function (item) {
            return item.mtoid == mtoid;
         });
        $scope.mtoid = method[0];
        
        var metrica = $scope.listMetric.filter(function (item) {
            return item.meoid == meoid;
         });
         $scope.meoid = metrica[0];

        var type = $scope.listTypequestion.filter(function (item) {
            return item.tqoid == tqoid;
         });
         $scope.tqoid = type[0];


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

    $scope.savequestion = function (qucode,ququestion,mtoid,meoid,tqoid,optionquestion) {
       question.post({qucode: qucode, ququestion: ququestion, mtoid:mtoid.mtoid, meoid:meoid.meoid, tqoid: tqoid.tqoid, optionquestion: optionquestion })
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

    $scope.updatequestion = function (quoid,qucode,ququestion,mtoid,meoid,tqoid,optionquestion) {
        question.put({ quoid:quoid, qucode: qucode, ququestion: ququestion, mtoid:mtoid.mtoid, meoid:meoid.meoid, tqoid: tqoid.tqoid, optionquestion: optionquestion })
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


    $scope.getMetric = function () {
        metric.get({})
       .$promise.then(function (resp) {
           $scope.listMetric = resp;
       });
    };
    $scope.getMetric();

    $scope.getMetricName = function (meoid) {
        var metric = $scope.listMetric.filter(function (item) {
            return item.meoid == meoid;
         });
         return metric[0].mename;
    };
        
    $scope.getType = function () {
        typequestion.get({})
       .$promise.then(function (resp) {
           $scope.listTypequestion = resp;
       });
    };
    $scope.getType();

    $scope.getTypeName = function (tqoid) {
        var type = $scope.listTypequestion.filter(function (item) {
            return item.tqoid == tqoid;
         });
         return type[0].tqdescription;
    };
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };   
}]);