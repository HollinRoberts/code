// Import express and path modules.
var express = require( "express");

var app = express();
var bodyParser = require('body-parser');
const path = require('path');
app.use(express.static(path.join(__dirname, '/bb/dist')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./server/config/mongoose.js")

var routes_setter=require('./server/config/routes.js');
routes_setter(app);

var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});

