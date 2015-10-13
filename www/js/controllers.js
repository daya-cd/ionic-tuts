angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope, $ionicModal, $ionicPopup) {


  $scope.loadTask = function() {
    $scope.tasks=[
       {'task_id':1,'task_name':'task 1'},
       {'task_id':2,'task_name':'task 2'},
       {'task_id':3,'task_name':'task 3'}
    ]
  }

  $scope.loadTask(); 
  // Create and load the Modal
  $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });
    // Open our new task modal
    $scope.newTask = function() {
      $scope.taskModal.show();
    };

  // Close the new task modal
  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  };

  // Called when the form is submitted
  $scope.createTask = function(task) {
  // SQLService.set(task.title);
  $scope.loadTask();
    $scope.taskModal.hide();
    task.title = "";
  };
  
  $scope.onItemDelete = function(taskid) {
  $ionicPopup.confirm({
    title: 'Confirm Delete',
    content: 'Are you sure you want to delete this task?'
  }).then(function(res) {
    if(res) {
    // SQLService.del(taskid);
    $scope.loadTask();
    } 
  });
  };


  $scope.onItemEdit = function(taskid) {
    $ionicPopup.prompt({
    title: 'Update Task',
    subTitle: 'Enter new task'
  }).then(function(res) {
    // SQLService.edit(res, taskid);
    $scope.loadTask();
  });
  };
  
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex - 1, 1);
    $scope.items.splice(toIndex, 0, item);
  };



  
});