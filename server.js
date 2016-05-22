
module.exports = function() {
    var express = require('express');
    var app = express();
    
    var bodyParser = require('body-parser');
    app.use( bodyParser.urlencoded({extended: false}) );
    app.use( bodyParser.json() );
    
    app.get('/', function(req, res) {
        res.send("EPLAN API device");
    });
    
    return app;
}