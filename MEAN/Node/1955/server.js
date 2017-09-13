// Import express and path modules.
var express = require( "express");

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/1955_api');
var ApiSchema = new mongoose.Schema({
    name:{type:String, required:true},
},{timestamps:true});
var Api = mongoose.model('api',ApiSchema);


app.get('/',function(req,res){
    Api.find({},function(err,api){
        if(err){
            console.log("error")
        } else {
            console.log(api);
            res.json(api);
        }
    })
})
app.get('/:name',function(req,res){
    Api.findOne({name:req.params.name},function(err,api){
        if(err){
            console.log("error")
        } else {
            console.log(api);
            res.json(api);
        }
    })
})
app.get('/new/:name', function(req, res) {
    var api = new Api({name:req.params.name});
    api.save(function(err){
        if(err){
            console.log("error")
        } else {
            console.log("successfully added");
            res.redirect("/")
        }
    })
})
app.get('/remove/:name', function(req, res) {
    Api.remove({name:req.params.name}, function(err,api){
        if(err){
            console.log("error")
        } else {
            console.log("successfully deleted");
            res.redirect("/")
        }
    })
})

var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});
