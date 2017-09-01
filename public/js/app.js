angular.module('WeatherApp', ['ngRoute', 'WeatherApp.controller', 'WeatherApp.directive', 'WeatherApp.Service'])

    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider

            .when('/', {
                templateUrl: 'templates/home.html'
            })

        $locationProvider.html5Mode(true);
    }])

 .filter('TempFilter', function() {
    return function(K) {
        var i, c, result;
        result = K - 273.15
        return result.toFixed(2);;
    };
});