var mongoose = require('mongoose');
var Survey = mongoose.model('survey');
module.exports = {
    create:function(req,res){
     
        var survey = new Survey({user:req.body.user,question:req.body.question,options:req.body.options,count:req.body.count});
        console.log(survey)
        survey.save(function(err){
                if(err){
                    console.log(err.message)
                    res.json(err)
                } else {
                    console.log('created')
                    res.json(survey)
                }
            })
    },
    showall:function(req,res){

        Survey.find({},function(err,surveys){
            if(err){
                console.log("error")
            } else {
            
                res.json(surveys);
            }
        })
    },
    show:function(req,res){
   
        Survey.findOne({_id:req.params.id},function(err,game){
            if(err){
                console.log("error")
            } else {
        
                res.json(game);
            }
        })
    },
    update:function(req,res){
        console.log(req.params.id)
        console.log(req.body)
        Survey.update({_id:req.params.id},{
            $set:{count:req.body}}, function(err,task){
            if(err){
                console.log("error")
            } else {
                console.log("successfully edited");
            }
    })
    },
    destroy:function(req,res){
        Survey.remove({_id:req.params.id}, function(err){
                if(err){
                    console.log("error")
                } else {
                    console.log("successfully deleted");
                    module.exports.showall(req,res)
                }
        })
    }
}