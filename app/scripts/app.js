'use strict';

var sayAahApp = angular.module('sayAahApp', ['ngResource'])
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
  }],
  ['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.post  = {'Content-Type': 'application/x-www-form-urlencoded'};
  }]
);
