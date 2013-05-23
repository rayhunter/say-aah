'use strict';

var sayAahApp = angular.module('sayAahApp', ['ngResource'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/analyze.html',
        controller: 'AnalyzeCtrl'
      })
      .when('/hub', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      /*})
      .otherwise({
        redirectTo: '/'*/
      })
      .when('/favelet', {
        templateUrl: 'favelet.js',
        //controller: 'FaveletCtrl'
      });
  }],
  ['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.post  = {'Content-Type': 'application/x-www-form-urlencoded'};
  }]
);
