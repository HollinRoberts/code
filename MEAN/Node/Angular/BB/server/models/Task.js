var mongoose = require("mongoose");

var QuestionSchema = new mongoose.Schema({
    question:{
        type:String,
        minlength:15,
    required:[true,"Question required"],
    },
    correct:{
        type:String,
        minlength:1,
        required:[true,"Correct Answer required"]
    },
    fake1:{
        type:String,
        minlength:1,
        required:[true,"Fake Answer 1 required"]
    },
    fake2:{
        type:String,
        minlength:1,
        required:[true,"Fake Answer 2 required"]
    },
    
    },{timestamps:true,setDefaultOnInsert:true});
var Question = mongoose.model('Question',QuestionSchema);

var ScoreSchema = new mongoose.Schema({
    name:{
        type:String,
        minlength:1,
    required:[true,"Name required"],
    },
    score:{
        type:String,
        minlength:1,
        required:[true,"Score required"]
    },
    percent:{
        type:Number,
        required:[true,"Percent required"]
    },
    },{timestamps:true,setDefaultOnInsert:true});
var Score = mongoose.model('Score',ScoreSchema);