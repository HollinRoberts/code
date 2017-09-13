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
var FenecSchema = new mongoose.Schema({
    age:{type:Number, required:true},
    name:{type:String, required:true},
},{timestamps:true});
mongoose.model('fenec',FenecSchema);
var Fenec = mongoose.model('fenec');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
// Setup ejs templating and define the views folder.
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// Root route to render the index.ejs view.
app.get('/', function(req, res) {
    Fenec.find({},function(err,fenec){
        if(err){
            console.log("error")
        } else {
            console.log(fenec);
            var context={"fenec":fenec};
            res.render('index',context);
        }
    })
})    


app.get('/fenec/new', function(req, res){
    res.render('new');
})

app.post('/fenec', function(req, res) {
    console.log("POST DATA", req.body);
    var fenec = new Fenec({name:req.body.name,age:req.body.age});
    fenec.save(function(err){
        if(err){
            console.log("error")
            Fenec.find({},function(err,fenec){
                if(err){
                    console.log("error")
                } else {
                    console.log(fenec);
                    res.render('index',{title:'you have errors!', errors:fenec.errors, "fenec":fenec});
                }
            });
        } else {
            console.log("successfully added a Fenec");
            res.redirect("/")
        }
    })
})


app.get('/fenec/edit/:id', function(req, res){
    console.log(req.params.id)
    Fenec.findOne({_id:req.params.id},function(err,fenec){
        if(err){
            console.log("error")
        } else {
            console.log(fenec);
            var context={"fenec":fenec};
            res.render('edit',context);
        }
    })
})

app.get('/fenec/:id', function(req, res) {
    Fenec.findOne({_id:req.params.id},function(err,fenec){
        if(err){
            console.log("error")
        } else {
            console.log(fenec);
            var context={"fenec":fenec};
            res.render('view',context);
        }
    })
            
})

app.post('/fenec/:id', function(req, res) {
    console.log("POST DATA", req.body);
    Fenec.update({_id:req.params.id},{name:req.body.name, age:req.body.age}, function(err,fenec){
            if(err){
                console.log("error")
                res.render('/fenec/req.params.id',{title:'you have errors!', errors:fenec.errors})
            } else {
                console.log("successfully edited a Fenec");
                res.redirect("/")
            }
    })
})

app.post('/fenec/destroy/:id', function(req, res) {
    console.log("POST DATA", req.body);
    Fenec.remove({_id:req.params.id}, function(err,fenec){
            if(err){
                console.log("error")
                res.render('/fenec/req.params.id',{title:'you have errors!', errors:fenec.errors})
            } else {
                console.log("successfully deleted a Fenec");
                res.redirect("/")
            }
    })
})


var server = app.listen(8000, function() {
    console.log("listening on port 8000");
   });
