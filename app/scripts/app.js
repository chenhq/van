/*jshint unused: vars */
define(['angular', 'controllers/main', 'layout/all']/*deps*/, function (angular, MainCtrl)/*invoke*/ {
  'use strict';
  return angular.module('vanApp', ['vanApp.layout',
  'vanApp.controllers',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
