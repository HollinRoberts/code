// Import express and path modules.
var express = require( "express");
var path = require( "path");
// Create the express app.
var app = express();
// Define the static folder.
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./client/static")));

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

require("./server/config/mongoose.js")

var routes_setter=require('./server/config/routes.js');
routes_setter(app);

var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});