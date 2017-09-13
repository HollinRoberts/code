// Import express and path modules.
var express = require( "express");
var path = require( "path");
// Create the express app.
var app = express();
// Define the static folder.
var bodyParser = require('body-parser');
// Integrate body-parser with our App
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/basic_mongoose');
var UserSchema = new mongoose.Schema({
    name:String,
    age:Number
})
mongoose.model('User',UserSchema)
var User = mongoose.model('User')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
// Setup ejs templating and define the views folder.
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// Root route to render the index.ejs view.
app.get('/', function(req, res) {
    User.find({}, function(err, users){
        console.log(users);
        if(err){
            console.log("error")
        } else {
            var context = {"users":users}
            console.log("successfully got users");
        res.render("index",context);
        }    
    })    
})
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    var user = new User({name:req.body.name,age:req.body.age});
    user.save(function(err){
        if(err){
        console.log("error")
        } else {
            console.log("successfully added a user");
        res.redirect("/")
        }

    })
})
// Start Node server listening on port 8000.
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
   });
var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    socket.on( "button_clicked", function (data){
        console.log( 'Someone clicked a button!  Reason: '  + data.reason);
        socket.emit( 'server_response', {response:  "sockets are the best!"});
    })
  // all the server socket code goes in here
})
