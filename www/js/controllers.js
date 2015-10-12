angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope, $ionicModal, $ionicPopup) {
  
    
  $scope.loadTask = function() {
    SQLService.all().then(function (results) {
      $scope.tasks = results;
    }); 
  }

  $scope.loadTask(); 
  
});