define(['angular', 'jquery.slimscroll'], function(angular) {
    'use strict';
    var dirs = angular.module('app.layout.directives', []);
    dirs.directive('slimScroll', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.slimScroll({
                    height: attrs.scrollHeight || '100%'
                });
            }
        };
    });

    dirs.directive('toggleMinNav', ['$rootScope', function ($rootScope) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var app = $('#app');
                var $window = $(window);
                element.on('click', function (e) {
                    if (app.hasClass('nav-min')) {
                        app.removeClass('nav-min');
                    } else {
                        app.addClass('nav-min');
                        $rootScope.$broadcast('minNav:enabled');
                    }
                    e.preventDefault();
                });

                var updateClass = function () {
                    var width;
                    width = $window.width();
                    if (width < 768) {
                        app.removeClass('nav-min');
                    }
                };
                var resizeTimer;
                $window.on('resize', function () {
                    clearTimeout(resizeTimer);
                    resizeTimer = setTimeout(updateClass, 300);
                });
            }
        };
    }]);

    dirs.directive('toggleOffCanvas', [
        function () {
            return {
                restrict: 'A',
                link: function (scope, element, attrs) {
                    element.on('click', function () {
                        $('#app').toggleClass('on-canvas');
                    });
                }
            };
        }
    ]);

    dirs.directive('slimScroll', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                angular.element(element).slimScroll({
                    height: attrs.scrollHeight || '100%'
                });
            }
        };
    });


    dirs.directive('highlightActive', [function () {
        return {
            restrict: "A",
            controller: ['$scope', '$element', '$attrs', '$location', function ($scope, $element, $attrs, $location) {
                var links = $element.find('a');
                var path = function () {
                    return $location.path();
                };
                var highlightActive = function (links, path) {
                    path = '#' + path;
                    angular.forEach(links, function (link) {
                        var $link = angular.element(link);
                        var $li = $link.parent('li');
                        var href = $link.attr('href');

                        if ($li.hasClass('active')) {
                            $li.removeClass('active')
                        }
                        if (path.indexOf(href) === 0) {
                            $li.addClass('active')
                        }
                    })
                };

                highlightActive(links, $location.path());

                $scope.$watch(path, function (newVal, oldVal) {
                    if (newVal === oldVal) {
                        return;
                    }
                    return highlightActive(links, $location.path());
                })
            }]
        }
    }]);

    dirs.directive('collapseNav', [function() {
        return {
            restrict: 'A',
            link: function(scope, element, atttrs) {
                var $lists = element.find('ul').parent('li');
                $lists.append('<i class="fa fa-caret-right icon-has-ul"></i>');
                var $a = $lists.children('a');
                var $listsRest = element.children('li').not($lists);
                var $aRest = $listsRest.children('a');

                var app = $('#app');

                $a.on('click', function(event) {
                    if (app.hasClass('nav-min')) {
                        return false;
                    }

                    var $this = $(this);
                    var $parent = $this.parent('li');
                    $lists.not($parent).removeClass('open').find('ul').slideUp();
                    $parent.toggleClass('open').find('ul').slideToggle();

                    event.preventDefault();
                });

                $aRest.on('click', function(event) {
                    $lists.removeClass('open').find('ul').slideUp();
                });

                //  reset collapse NAV, sub Ul should slideUp
                scope.$on('minNav:enabled', function(event) {
                    $lists.removeClass('open').find('ul').slideUp();
                })

            }
        }
    }]);

    dirs.directive('customBackground', function() {
        return {
            restrict: 'A',
            controller: [
                '$scope',
                '$element',
                '$location',
                function($scope, $element, $location) {
                    var path = function() {
                        return $location.path();
                    }

                    var addBg = function(path) {
                        $element.removeClass('body-name body-special body-task body-lock');

                        // add certain class based on path
                        switch (path) {
                            case '/':
                                return $element.addClass('body-home');
                            case '/error/404':
                            case '/error/500':
                            case '/account/signin':
                            case '/account/signup':
                            case '/account/forgot-password':
                                return $element.addClass('body-special');
                            case '/account/lock-screen':
                                return $element.addClass('body-special body-lock');
                            case '/tasks':
                                return $element.addClass('body-tasks');
                        }

                    };

                    addBg($location.path());

                    $scope.$watch(path, function(newVal, oldVal) {
                        if (newVal === oldVal) {
                            return;
                        }
                        addBg($location.path());
                    })
                }
            ]
        }
    });
});