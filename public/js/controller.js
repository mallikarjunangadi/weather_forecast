angular.module('WeatherApp.controller', [])

    .controller('homeCtrl', function ($scope, apiCallService, dataPassService, $timeout, $interval) {
        $scope.location = {};
        $scope.curLocationWeather = {
            list: [] 
        }
        $scope.enteredLocationWeather = {
            list: []
        }
        $scope.weatherErr = "";
        $scope.searchDateTime;
        $scope.timeDate;
        $scope.geoLocationErr;
        $scope.curDateTime = new Date();
        $interval(function() {
            $scope.timeDate = new Date(); 
        }, 1000)
        $scope.searchWeather = function () {
            var lngLtd = dataPassService.get();
            console.log(lngLtd);
            $scope.searchDateTime = new Date();
            $scope.weatherErr = "";
            var promise = apiCallService.getWeather(lngLtd);
            promise.then(function (res) {
                console.log(res.data.data);
                if (res.data.done) {
                    $scope.enteredLocationWeather = JSON.parse(res.data.data);
                } else {
                    $scope.weatherErr = res.data.message;
                }

            }, function () {
                $scope.weatherErr = "unable to get weather.. please try again"
                console.log('error');
            })
        }

        function getCurrentLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    console.log(position.coords.latitude);
                    console.log(position.coords.longitude);
                    var lngLtd = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }
                    //   $scope.searchWeather();
                    // var lngLtd = dataPassService.get();
                    console.log(lngLtd);
                    var promise = apiCallService.getWeather(lngLtd);
                    promise.then(function (res) {
                    //    console.log(res.data.data);
                        if (res.data.done) {
                            $scope.curLocationWeather = JSON.parse(res.data.data);
                        } else {
                            $scope.geoLocationErr = "Unable to get current location weather...";
                        }

                    }, function () {
                        $scope.geoLocationErr = "Unable to get current location weather... ";
                        console.log('error');
                    })
                });
            } else {
                $scope.geoLocationErr = "Geolocation is not supported by this browser.";
               //  alert("Geolocation is not supported by this browser.");
            }
        }
        $timeout(getCurrentLocation(), 3000);

    })