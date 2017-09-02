var request = require('request');
var dbService = require('./module/dbService')

module.exports = (app) => {
    app.get('/getWeatherByCoords', dbService.getWeatherByCoords)
    app.get('*', (req, res) => {
        res.sendFile(req.rootDir+'/public/index.html');
    })
}