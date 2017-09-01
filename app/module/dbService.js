var request = require('request');

exports.getWeatherByCoords = (req, res) => {
    let lat = req.body.lat;
    let lon = req.body.lng;
    console.log(req.body);

    request({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        qs: { lat: lat, lon: lon, cnt: 14, APPID: "1a1d94c9d54241d77546169340d22366"},
        URL: " http://api.openweathermap.org/data/2.5/forecast/daily",
        method: "GET"
    }, function (err, result, body) {
       if(err) {
           console.log(err);
           return res.send({"message":"unable to get weather details", data:"", done: false});
       }
       console.log(body); 
       return res.send({"message":"weather details success", data:"", done: true})
    })
}