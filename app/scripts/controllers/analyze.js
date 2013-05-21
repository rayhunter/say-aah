'use strict';

sayAahApp.controller('AnalyzeCtrl', function($scope) {
  $scope.master= {};
  $scope.placeholder= {};

  $scope.update = function(article) {
    $scope.master= angular.copy(article);
  };
 
  $scope.reset = function() {
    $scope.article = angular.copy($scope.master);
  };
 
  $scope.reset();
});
