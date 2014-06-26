define(['angular', './directives'], function (angular) {
    'use strict';
    angular.module('vanApp.layout', ['vanApp.layout.directives'])
        .directive('slimScroll', function () {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    angular.element(element).slimScroll({
                        height: attrs.scrollHeight || '100%'
                    });
                }
            };
        });
});