// Import express and path modules.
var express = require( "express");
var path = require( "path");
var app = express();

var bodyParser = require('body-parser');


app.use(express.static(path.join(__dirname, "./client/static")));
require("./server/config/mongoose.js")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, './client/views'));
app.set('view engine', 'ejs');

var routes_setter=require('./server/config/routes.js');
routes_setter(app);

var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});
