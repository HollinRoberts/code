// Import express and path modules.
var express = require( "express");
var path = require( "path");
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./server/config/mongoose.js")

var routes_setter=require('./server/config/routes.js');
routes_setter(app);

var server = app.listen(1337, function() {
    console.log("listening on port 8000");
});
