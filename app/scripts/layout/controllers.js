define(['angular'], function (angular) {
    'use strict';
    var ctrls = angular.module('vanApp.layout.controllers', []);

    ctrls.controller('NavCtrl', function($scope) {
        $scope.test = 'this is a test string';
    })
});
