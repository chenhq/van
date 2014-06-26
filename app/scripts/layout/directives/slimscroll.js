define(['angular', 'jquery.slimscroll'], function (angular) {
  'use strict';
  angular.module('vanApp.directives')
  	.directive('slimScroll', function () {
      return {
      	restrict: 'A',
      	link: function(scope, element, attrs) {
            element.slimScroll({
                height: attrs.scrollHeight || '100%'
            });
      	}
      };
  	});
});
