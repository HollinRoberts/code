var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
    create:function(req,res){
        console.log("in create function")   
        var user = new User({
           
            first_name:req.body.first,
            last_name:req.body.last,
            email:req.body.email,
            birthday:req.body.birthday,
            password:req.body.password
        });
        console.log(user)
        user.save(function(err,user){
            console.log("in save")
            if(err){
                console.log('in error')
                console.log(err)
                res.render("index",err)
            } else {
                console.log('created')
                res.redirect("/")
            }
        })        
    },

    check:function(req,res){
        console.log("check if user is logged in")
        res.render('index')
    }

    // show:function(req,res){
    //     Task.findOne({_id:req.params.id},function(err,task){
    //         if(err){
    //             console.log("error")
    //         } else {
    //             console.log(task);
    //             res.json(task);
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
    // showall:function(req,res){
    //     console.log('in show all')
    //     Task.find({},function(err,task){
    //         if(err){
    //             console.log("error")
    //         } else {
    //             console.log(task);
    //             res.json(task);
    //         }
    //     })
    // }
}