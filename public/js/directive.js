angular.module('WeatherApp.directive', [])

.directive('googleplace', function($rootScope, dataPassService) {
    return {
        require: 'ngModel',
        link: function(scope, element, attrs, model) {
            var options = {
                types: []
            };
            scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

            google.maps.event.addListener(scope.gPlace, 'place_changed', function() {

             var place = scope.gPlace.getPlace();
              if (place && place.geometry) {
            //   console.log(place.geometry.location.lat()); 
           //    console.log(place.geometry.location.lng()); 
               var data = {
                 lat: place.geometry.location.lat(),
                 lng: place.geometry.location.lng()
               };
               dataPassService.set(data);
              // $rootScope.lngLtd = data;
              } 
              
               scope.$apply(function() {
                   model.$setViewValue(element.val());                
               });
            });
        }
    };
});