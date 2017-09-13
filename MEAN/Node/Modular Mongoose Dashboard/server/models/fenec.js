var mongoose = require("mongoose");
var FenecSchema = new mongoose.Schema({
    age:{type:Number, required:true},
    name:{type:String, required:true},
},{timestamps:true});
var Fenec = mongoose.model('Fenec',FenecSchema);