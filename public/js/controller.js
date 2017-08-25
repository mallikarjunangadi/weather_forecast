angular.module('WeatherApp.controller', [])

.controller('homeCtrl', function($scope) {
   $scope.weather = {};
   $scope.disableTap = function() {
      console.log('disable tap executed');
   }
})