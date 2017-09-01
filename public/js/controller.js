angular.module('WeatherApp.controller', [])

    .controller('homeCtrl', function ($scope, apiCallService, dataPassService) {
        $scope.weather = {};
        $scope.disableTap = function () {
            console.log('disable tap executed');
        }

        $scope.searchWeather = function () {
            var lngLtd = dataPassService.get();
            console.log(lngLtd);
            var promise = apiCallService.getWeather(lngLtd);
            promise.then(function (res) {
                console.log(res);
            }, function () {
                console.log('error');
            })
        }

        function getCurrentLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    console.log(position.coords.latitude);
                    console.log(position.coords.longitude);
                    $scope.searchWeather();
                });
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }
        getCurrentLocation();


        $scope.curLocationWeather = {
            "city": {
                "id": 1851632,
                "name": "Shuzenji",
                "coord": {
                    "lon": 138.9333,
                    "lat": 34.9667
                },
                "country": "JP",
                "population": 0
            },
            "cod": "200",
            "message": 2.7223763,
            "cnt": 3,
            "list": [
                {
                    "dt": 1504231200,
                    "temp": {
                        "day": 290.5,
                        "min": 290.5,
                        "max": 290.5,
                        "night": 290.5,
                        "eve": 290.5,
                        "morn": 290.5
                    },
                    "pressure": 1009.32,
                    "humidity": 100,
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "sky is clear",
                            "icon": "02n"
                        }
                    ],
                    "speed": 14.16,
                    "deg": 22,
                    "clouds": 8
                },
                {
                    "dt": 1504317600,
                    "temp": {
                        "day": 295.65,
                        "min": 292.01,
                        "max": 298.29,
                        "night": 296.88,
                        "eve": 298.29,
                        "morn": 292.01
                    },
                    "pressure": 1006.91,
                    "humidity": 100,
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "scattered clouds",
                            "icon": "03d"
                        }
                    ],
                    "speed": 13.71,
                    "deg": 24,
                    "clouds": 48
                },
                {
                    "dt": 1504404000,
                    "temp": {
                        "day": 297.51,
                        "min": 296.24,
                        "max": 298.33,
                        "night": 296.3,
                        "eve": 298.33,
                        "morn": 296.24
                    },
                    "pressure": 1012.25,
                    "humidity": 100,
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "sky is clear",
                            "icon": "01d"
                        }
                    ],
                    "speed": 2.36,
                    "deg": 97,
                    "clouds": 0
                },
                {
                    "dt": 1504317600,
                    "temp": {
                        "day": 295.65,
                        "min": 292.01,
                        "max": 298.29,
                        "night": 296.88,
                        "eve": 298.29,
                        "morn": 292.01
                    },
                    "pressure": 1006.91,
                    "humidity": 100,
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "scattered clouds",
                            "icon": "03d"
                        }
                    ],
                    "speed": 13.71,
                    "deg": 24,
                    "clouds": 48
                },
                {
                    "dt": 1504404000,
                    "temp": {
                        "day": 297.51,
                        "min": 296.24,
                        "max": 298.33,
                        "night": 296.3,
                        "eve": 298.33,
                        "morn": 296.24
                    },
                    "pressure": 1012.25,
                    "humidity": 100,
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "sky is clear",
                            "icon": "01d"
                        }
                    ],
                    "speed": 2.36,
                    "deg": 97,
                    "clouds": 0
                },
                {
                    "dt": 1504317600,
                    "temp": {
                        "day": 295.65,
                        "min": 292.01,
                        "max": 298.29,
                        "night": 296.88,
                        "eve": 298.29,
                        "morn": 292.01
                    },
                    "pressure": 1006.91,
                    "humidity": 100,
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "scattered clouds",
                            "icon": "03d"
                        }
                    ],
                    "speed": 13.71,
                    "deg": 24,
                    "clouds": 48
                },
                {
                    "dt": 1504404000,
                    "temp": {
                        "day": 297.51,
                        "min": 296.24,
                        "max": 298.33,
                        "night": 296.3,
                        "eve": 298.33,
                        "morn": 296.24
                    },
                    "pressure": 1012.25,
                    "humidity": 100,
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "sky is clear",
                            "icon": "01d"
                        }
                    ],
                    "speed": 2.36,
                    "deg": 97,
                    "clouds": 0
                },
                {
                    "dt": 1504317600,
                    "temp": {
                        "day": 295.65,
                        "min": 292.01,
                        "max": 298.29,
                        "night": 296.88,
                        "eve": 298.29,
                        "morn": 292.01
                    },
                    "pressure": 1006.91,
                    "humidity": 100,
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "scattered clouds",
                            "icon": "03d"
                        }
                    ],
                    "speed": 13.71,
                    "deg": 24,
                    "clouds": 48
                },
                {
                    "dt": 1504404000,
                    "temp": {
                        "day": 297.51,
                        "min": 296.24,
                        "max": 298.33,
                        "night": 296.3,
                        "eve": 298.33,
                        "morn": 296.24
                    },
                    "pressure": 1012.25,
                    "humidity": 100,
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "sky is clear",
                            "icon": "01d"
                        }
                    ],
                    "speed": 2.36,
                    "deg": 97,
                    "clouds": 0
                },
                {
                    "dt": 1504317600,
                    "temp": {
                        "day": 295.65,
                        "min": 292.01,
                        "max": 298.29,
                        "night": 296.88,
                        "eve": 298.29,
                        "morn": 292.01
                    },
                    "pressure": 1006.91,
                    "humidity": 100,
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "scattered clouds",
                            "icon": "03d"
                        }
                    ],
                    "speed": 13.71,
                    "deg": 24,
                    "clouds": 48
                },
                {
                    "dt": 1504404000,
                    "temp": {
                        "day": 297.51,
                        "min": 296.24,
                        "max": 298.33,
                        "night": 296.3,
                        "eve": 298.33,
                        "morn": 296.24
                    },
                    "pressure": 1012.25,
                    "humidity": 100,
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "sky is clear",
                            "icon": "01d"
                        }
                    ],
                    "speed": 2.36,
                    "deg": 97,
                    "clouds": 0
                }
            ]
        }
    })