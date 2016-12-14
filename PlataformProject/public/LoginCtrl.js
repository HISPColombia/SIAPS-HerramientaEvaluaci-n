angular.module('appServersoft').controller('LoginCtrl',function($scope,$location){
  $scope.login = function(){
    $location.path('/dashboard')
  };
});