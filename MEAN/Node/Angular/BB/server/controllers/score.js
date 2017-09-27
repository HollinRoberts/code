var mongoose = require('mongoose');
var Score = mongoose.model('Score');
module.exports = {
    create:function(req,res){
        console.log("in create function")
        console.log(req.body)
        var score = new Score({name:req.body.name,score:req.body.score,percent:req.body.percent});
        console.log(score)
        score.save(function(err){
                if(err){
                    console.log(err.message)
                    res.json(err)
                } else {
                    console.log('created')
                    res.json(score)
                }
            })
    },
   
    showall:function(req,res){
        console.log('in show all')
        Score.find({},function(err,score){
            if(err){
                console.log("error")
            } else {
                console.log(score);
                res.json(score);
            }
        })
    }
}