var mongoose = require("mongoose");
var QuoteSchema = new mongoose.Schema({
    quote:{type:String, required:true},
    name:{type:String, required:true},
},{timestamps:true});
var Quote = mongoose.model('Quote',QuoteSchema);
