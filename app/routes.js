var request = require('request');

module.exports = function(app) {
    app.get('/getWeather', function(req, res) {

    })

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    })
}