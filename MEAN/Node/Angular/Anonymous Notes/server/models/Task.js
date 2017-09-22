var mongoose = require("mongoose");
var NoteSchema = new mongoose.Schema({
    content:{type:String, required:true},
    },{timestamps:true,setDefaultOnInsert:true});
var Note = mongoose.model('Note',NoteSchema);