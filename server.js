var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));
require('./app/routes')(app);
app.listen(port, function() {
    console.log('server running at '+port);
});
 