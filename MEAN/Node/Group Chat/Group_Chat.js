// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
var session = require("express-session");
// create the express app
var app = express();
var bodyParser = require('body-parser');

// use it!
app.use(session({secret: 'codingdojorocks'}));
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// root route to render the index.ejs view
app.get('/', function(req, res) {
    res.render("index");
})
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
    
});
var chat=[]
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    socket.emit("on_load",{chat:chat});
    socket.on( "login", function (data){
        socket.name=data
        
       
    })
    socket.on( "post", function (data){
        chat.push(socket.name+": "+data)
        // console.log(chat)
        io.emit( 'update', {chat: chat});
    })
})