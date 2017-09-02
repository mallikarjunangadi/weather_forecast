var request = require('request');

exports.getWeatherByCoords = (req, res) => {
    let lat = req.query.lat;
    let lon = req.query.lng;
    console.log(req.query);

    request({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        qs: { lat: lat, lon: lon, cnt: 14, APPID: "1a1d94c9d54241d77546169340d22366"},
        uri: " http://api.openweathermap.org/data/2.5/forecast/daily",
        method: "GET"
    }, function (err, result, body) {
       if(err) {
           console.log(err);
           return res.send({"message":"unable to get weather details", data:"", done: false});
       }
      // console.log(body); 
       return res.send({"message":"weather details success", data:body, done: true})
    })
}