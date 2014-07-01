define(['angular', 'lodash'], function (angular, _) {
    'use strict';
    var ctrls = angular.module('app.layout.controllers', []);

    ctrls.controller('NavCtrl', function($scope) {
        $scope.test = 'this is a test string';
    });

    ctrls.controller('MainCtrl', ['$scope', '$location',
        function($scope, $location) {
            $scope.isSpecificPage = function() {
                var path = $location.path();
                console.log(path);
                return _.contains([
                    '/error/404',
                    '/error/500',
                    '/account/signin',
                    '/account/signup',
                    '/account/forgot-password',
                    '/account/lock-screen'
                ], path)
            };

            $scope.main = {
                brand: 'TianFuData',
                name: 'Aphrodite'
            }
        }
    ]);

    /*


     $scope.main =
     brand: 'TianFu'
     name: 'Aphrodite' # those which uses i18n can not be replaced for now.

     ])
     */

});
