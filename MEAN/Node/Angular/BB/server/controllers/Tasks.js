var mongoose = require('mongoose');
var Question = mongoose.model('Question');
module.exports = {
    create:function(req,res){
        console.log("in create function")
        console.log(req.body)
        var question = new Question({question:req.body.question,correct:req.body.correct,fake1:req.body.fake1,fake2:req.body.fake2});
        console.log(question)
        question.save(function(err){
                if(err){
                    console.log(err.message)
                    res.json(err)
                } else {
                    console.log('created')
                    res.json(question)
                }
            })
    },
    showall:function(req,res){
        console.log('in show all')
        Question.find({},function(err,questions){
            if(err){
                console.log("error")
            } else {
                console.log(questions);
                res.json(questions);
            }
        })
    }
}