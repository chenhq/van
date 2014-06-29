/*jshint unused: vars */
define(['angular', 'ui-bootstrap', 'layout/all']/*deps*/, function (angular)/*invoke*/ {
  'use strict';
  return angular.module('vanApp', ['vanApp.layout',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
    .config(function ($routeProvider) {
          $routeProvider
              .when('/', {
                  redirectTo: '/dashboard'
              })
              .when('/dashboard', {
                  templateUrl: 'views/dashboard.html'
              })

              // Account
              .when('/account/signin', {
                  templateUrl: 'views/account/signin.html'
              })
              .when('/account/signup', {
                  templateUrl: 'views/account/signup.html'
              })
              .when('/account/forgot-password', {
                  templateUrl: 'views/account/forgot-password.html'
              })
              .when('/account/lock-screen', {
                  templateUrl: 'views/account/lock-screen.html'
              })
              .when('/account/profile', {
                  templateUrl: 'views/account/profile.html'
              })

              // errors
              .when('/error/404', {
                  templateUrl: 'views/error/404.html'
              })
              .when('/error/500', {
                  templateUrl: 'views/error/500.html'
              })
              .otherwise({
                  redirectTo: '/error/404'
              });
    });
});
