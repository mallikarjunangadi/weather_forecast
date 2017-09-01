var request = require('request');
var dbService = require('./module/dbService')

module.exports = (app) => {
  //  app.get('/getWeatherByCoords', dbService.getWeatherByCoords)
    app.get('/getWeatherByCoords', function(req, res) {
        console.log('get entered..');
    })

    app.get('*', (req, res) => {
        res.sendfile('./public/index.html');
    })
}