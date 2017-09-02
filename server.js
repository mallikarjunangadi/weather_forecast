var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;

//app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
app.use(function(req, res, next) {
    req.rootDir = __dirname;
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});
require('./app/routes')(app);
app.listen(port, () => {
    console.log('server running at '+port);
});
 