// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');

// use it!

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
var pacman=0
var players=0
var chat=[]
var count = 0
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    var connected=Object.keys(io.sockets.connected);
    console.log("Client/socket is connected!");
    console.log("Client/socket id is: ", socket.id);
    socket.emit("on_load",{chat:chat, user:socket.id,connected:connected});
    
    socket.on( "login", function (data){
        var user=socket.id;
        console.log(players)
        players++;
        console.log(data)
        socket.name=data.person;
        socket.x=data.position.x;
        socket.y=data.position.y;
        socket.score=data.score
        console.log(socket.x)
        io.emit("on_login", user)
    })
    socket.on( "post", function (data){
        
        chat.push(socket.name+": "+data)
        // console.log(chat)
        io.emit( 'update', {chat: chat});
    })

    socket.on( "move", function (data){
        console.log(data.position.user)
        console.log(data.position.user)
        console.log(socket.id+"socket id")
        if(data.position.user==socket.id){
            socket.x=data.position.x;
            socket.y=data.position.y;
            socket.score=data.score
            io.emit('move', [{name: socket.name, x:socket.x, y:socket.y,world:data.world,score:socket.score}] );
        }
    })
    
})