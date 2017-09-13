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
// define Schema variable
var Schema = mongoose.Schema;
// define Post Schema
var MessageSchema = new mongoose.Schema({
    name: {type:String, required: true, minlength:4},
    text: {type: String, required: true }, 
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {timestamps: true });
// define Comment Schema
var CommentSchema = new mongoose.Schema({
 _Message: {type: Schema.Types.ObjectId, ref: 'Message'},
    name: {type:String, required: true, minlength:4},
    text: {type: String, required: true }
}, {timestamps: true });
mongoose.model('Message', MessageSchema);
mongoose.model('Comment', CommentSchema);

var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
// Setup ejs templating and define the views folder.
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// Root route to render the index.ejs view.


app.get('/', function(req, res) {
    Message.find({})
    .populate('comments')
    .exec(function(err, post) {
        console.log(post)
         res.render('index', {message: post});
           });
})    

app.post('/message', function(req, res) {
    console.log("POST DATA", req.body);
    var message = new Message({name:req.body.name,text:req.body.message});
    message.save(function(err){
        if(err){
            Message.find({})
            .populate('comments')
            .exec(function(err, post) {
            // console.log("error")
            // console.log(message)
            // console.log('err')
            console.log('*****')
            console.log(message.errors)
            // console.log(err.errors)
            res.render("index",{title:'you have errors!', errors:message.errors,message:{}})
        })} else {
            console.log("successfully added a quote");
            res.redirect("/")
        }

    })
})

   // route for creating one comment with the parent post id
   app.post('/comment/:id', function (req, res){
     Message.findOne({_id: req.params.id}, function(err, message){
            var comment = new Comment({name:req.body.name,text:req.body.comment});
            comment._message = message._id;
            message.comments.push(comment);
            comment.save(function(err){
                    message.save(function(err){
                          if(err) { console.log('Error'); } 
                          else { res.redirect('/'); }
                    });
            });
      });
    });


var server = app.listen(8000, function() {
    console.log("listening on port 8000");
   });
