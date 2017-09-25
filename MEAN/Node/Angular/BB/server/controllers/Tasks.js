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
    // show:function(req,res){
    //     console.log(req.params.email)
    //     User.findOne({email:req.params.email},function(err,user){
    //         if(err){
    //             console.log("error")
    //         } else {
    //             console.log("in show function")
    //             console.log(user);
    //             res.json(user);
    //         }
    //     })
    // },
    // update:function(req,res){
    //     Task.update({_id:req.params.id},{title:req.body.title, description:req.body.description,completed:req.body.completed}, function(err,task){
    //             if(err){
    //                 console.log("error")
    //             } else {
    //                 console.log("successfully edited");
    //                 res.redirect("/tasks")
    //             }
    //     })
    // },
    // destroy:function(req,res){
    //     Task.remove({_id:req.params.id}, function(err){
    //             if(err){
    //                 console.log("error")
    //             } else {
    //                 console.log("successfully deleted");
    //                 module.exports.showall(req,res)
    //             }
    //     })
    // },
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