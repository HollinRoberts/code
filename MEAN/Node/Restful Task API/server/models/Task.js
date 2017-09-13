var mongoose = require("mongoose");
var TaskSchema = new mongoose.Schema({
    title:{type:String, required:true},
    description:{type:String, default:""},
    completed:{type:Boolean, default:false}
},{timestamps:true,setDefaultOnInsert:true});
var Task = mongoose.model('Task',TaskSchema);