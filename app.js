// app.js

var server = require('./server');

var database = require('./database/database.js');
database();

var app = server();
var http = require('http');

var port = process.env.PORT || 3000;
http.createServer(app).listen(port);

console.log("epl-device Service listeing on port:", port);

