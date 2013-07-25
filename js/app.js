'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.directives'])
    .config(function ($compileProvider){
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/home.html'});
        $routeProvider.when('/switchView', {templateUrl: 'partials/switch.html', controller: 'SwitchCtrl'});
        $routeProvider.when('/repeatView', {templateUrl: 'partials/repeat.html', controller: 'RepeatCtrl'});
        $routeProvider.when('/showView', {templateUrl: 'partials/show.html', controller: 'ShowCtrl'});
        $routeProvider.when('/includeView', {templateUrl: 'partials/include.html'});
        $routeProvider.when('/customView', {templateUrl: 'partials/customEvent.html', controller: 'RepeatCtrl'});
        $routeProvider.otherwise({redirectTo: '/'});
  }]);
