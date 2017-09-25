var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
    create:function(req,res){
        console.log("in create function")
        console.log(req.body)
        var user = new User({first:req.body.first,last:req.body.last,email:req.body.email,password:req.body.password});
        console.log(user)
        user.save(function(err){
                if(err){
                    console.log(err.message)
                    res.json(err)
                } else {
                    console.log('created')
                    res.json(user)
                }
            })
    },
    show:function(req,res){
        console.log(req.params.email)
        User.findOne({email:req.params.email},function(err,user){
            if(err){
                console.log("error")
            } else {
                console.log("in show function")
                console.log(user);
                res.json(user);
            }
        })
    },
    update:function(req,res){
        Task.update({_id:req.params.id},{title:req.body.title, description:req.body.description,completed:req.body.completed}, function(err,task){
                if(err){
                    console.log("error")
                } else {
                    console.log("successfully edited");
                    res.redirect("/tasks")
                }
        })
    },
    destroy:function(req,res){
        Task.remove({_id:req.params.id}, function(err){
                if(err){
                    console.log("error")
                } else {
                    console.log("successfully deleted");
                    module.exports.showall(req,res)
                }
        })
    },
    showall:function(req,res){
        console.log('in show all')
        Note.find({},function(err,notes){
            if(err){
                console.log("error")
            } else {
                console.log(notes);
                res.json(notes);
            }
        })
    }
}