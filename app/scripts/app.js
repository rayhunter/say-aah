'use strict';

var sayAahApp = angular.module('sayAahApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/analyze', {
        templateUrl: 'views/analyze.html',
        controller: 'AnalyzeCtrl'
      /*})
      .otherwise({
        redirectTo: '/'*/
      });
  }]);
