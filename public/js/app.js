angular.module('WeatherApp', ['ngRoute', 'WeatherApp.controller', 'WeatherApp.directive'])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
     $routeProvider

     .when('/', {
         templateUrl: 'templates/home.html'
     })

     $locationProvider.html5Mode(true);
}])