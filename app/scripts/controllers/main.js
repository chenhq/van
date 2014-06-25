define(['angular', 'lodash'], function (angular, _) {
  'use strict';

  angular.module('vanApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope, $location) {
      $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];

      $scope.isSpecificPage = function() {
          var path = $location.path();
          // return false;

          return _.contains([
              '/404',
              'pages/500',
              'pages/login',
              'pages/sigin',
              'pages/signup'
          ], path);

      };

      $scope.main = {
          brand: 'TianFuData',
          name: 'Van'
      }
    });
});
