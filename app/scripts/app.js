/*jshint unused: vars */
define(['angular', 'controllers/main', 'layout/directives/slimscroll', 'directives/testdirective']/*deps*/, function (angular, MainCtrl, TestdirectiveDirective)/*invoke*/ {
  'use strict';
  return angular.module('vanApp', ['vanApp.controllers',
  'vanApp.directives',
'vanApp.directives.Testdirective',
/*angJSDeps*/
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
