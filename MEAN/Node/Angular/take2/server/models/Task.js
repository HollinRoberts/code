var mongoose = require("mongoose");

var SurveySchema = new mongoose.Schema({
    user:{
        type:String,
        minlength:2,
    required:[true,"User required"],
    },
    question:{
        type:String,
        minlength:8,
    required:[true,"Question required"],
    },
    options:{
        type:Array,
        required:[true,"Options required"]
    },
    count:{
        type:Array,
        required:[true,"Count required"]
    },
    },{timestamps:true,setDefaultOnInsert:true});
var Survey = mongoose.model('survey',SurveySchema);

