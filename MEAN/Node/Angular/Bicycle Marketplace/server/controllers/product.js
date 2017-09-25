var mongoose = require('mongoose');
var Product = mongoose.model('Product');
module.exports = {
    create:function(req,res){
        console.log("in create function")
        console.log(req.body)
        var product = new Product({title:req.body.title,desc:req.body.description,price:req.body.price,location:req.body.location,img:req.body.img});
        console.log(product)
        product.save(function(err){
                if(err){
                    console.log(err.message)
                    res.json(err)
                } else {
                    console.log('created')
                    res.json(product)
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
        console.log('in product show all')
        Product.find({},function(err,products){
            if(err){
                console.log("error")
            } else {
                console.log(products);
                res.json(products);
            }
        })
    }
}