angular.module('WeatherApp.Service', [])
 
    .factory('dataPassService', function () {
        var temp;
        return {
            get: function () {
                return temp;
            },
            set: function (obj) {
                console.log(obj);
                temp = obj;
            }
        }
    })

    .factory('apiCallService', function ($http, $q) {
        
        function getWeather(lngLtd) {
            var deferred = $q.defer();
            console.log(lngLtd); 
            var req = {
                method: "GET", 
                url: "http://localhost:8080/getWeatherByCoords",
                data: jQuery.param(lngLtd),
                headers:
                { 
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }

            $http(req).then(function(res) {
               deferred.resolve(res);
            }, function() {
               deferred.reject();
            })

            return deferred.promise;
        }

        return {
            getWeather: getWeather
        }
    })