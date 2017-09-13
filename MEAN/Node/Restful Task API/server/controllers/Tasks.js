var mongoose = require('mongoose');
var Task = mongoose.model('Task');
module.exports = {
    create:function(req,res){
        console.log("in create function")
        console.log(req.body)
        var task = new Task({title:req.body.title,description:req.body.description,});
        console.log(task)
        task.save(function(err){
                if(err){
                    console.log(err.name)
                } else {
                    console.log('created')
                    res.redirect("/tasks")
                }
            })
    },
    show:function(req,res){
        Task.findOne({_id:req.params.id},function(err,task){
            if(err){
                console.log("error")
            } else {
                console.log(task);
                res.json(task);
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
        Task.find({},function(err,task){
            if(err){
                console.log("error")
            } else {
                console.log(task);
                res.json(task);
            }
        })
    }
}