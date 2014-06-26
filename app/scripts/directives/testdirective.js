define(['angular'], function (angular) {
  'use strict';

  angular.module('vanApp.directives.Testdirective', [])
  	.directive('testDirective', function () {
      return {
      	template: '<div></div>',
      	restrict: 'E',
      	link: function postLink(scope, element, attrs) {
          element.text('this is the testDirective directive');
      	}
      };
  	});
});
