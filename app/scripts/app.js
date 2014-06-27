/*jshint unused: vars */
define(['angular', 'ui-bootstrap','controllers/main', 'layout/all']/*deps*/, function (angular)/*invoke*/ {
  'use strict';
  return angular.module('vanApp', ['vanApp.layout',
  'vanApp.controllers',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
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
