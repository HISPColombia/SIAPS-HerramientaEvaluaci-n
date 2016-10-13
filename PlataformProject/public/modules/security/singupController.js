appServersoft.controller('singupController', ['$scope', '$filter', 'authentication', function ($scope, $filter,authentication) {
        authentication.logout();
        $scope.alerts = [];
        $scope.login = function (user, password) {
        authentication.login(user, password).then(function (data){
                $scope.addAlert("Usuario y/o contrase�a incorrecta");
            });
        }
        
        $scope.addAlert = function (menssage) {
            $scope.alerts.push({ label: " ", msg: menssage });
        };
        
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };    
}]);