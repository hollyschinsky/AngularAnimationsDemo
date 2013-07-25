'use strict';

/* Directives */


angular.module('myApp.directives', [])
    .directive('appVersion', ['version', function(version) {
        return function(scope, elm, attrs) {
          elm.text(version);
        }}])
    .directive('myAnimateDirective', function($animator) {
        return function($scope, element, attrs) {
           var animator = $animator($scope, attrs);
           element.bind('click', function() {
              animator.animate('myEvent', element);
              if(!$scope.$$phase) $scope.$apply();
           });
        };
    })
