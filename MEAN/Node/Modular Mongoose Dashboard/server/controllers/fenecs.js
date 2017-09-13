var mongoose = require('mongoose');
var Fenec = mongoose.model('Fenec');
module.exports = {
    create:function(req,res){
        var fenec = new Fenec({name:req.body.name,age:req.body.age});
        // var Fenec = new Fenec({name:req.body.name,age:req.body.age});
        fenec.save(function(err){
            if(err){
                console.log("error")
                fenec.find({},function(err,fenec){
                    if(err){
                        console.log("error")
                    } else {
                        console.log(fenec);
                        res.render('index',{title:'you have errors!', errors:fenec.errors, "fenec":fenec});
                    }
                });
            } else {
                console.log("successfully added a Fenec");
                res.redirect("/")
            }
        })
    },
    edit:function(req,res){
        Fenec.findOne({_id:req.params.id},function(err,fenec){
            if(err){
                console.log("error")
            } else {
                console.log(fenec);
                var context={"fenec":fenec};
                res.render('edit',context);
            }
        })
    },
    show:function(req,res){
        Fenec.findOne({_id:req.params.id},function(err,fenec){
            if(err){
                console.log("error")
            } else {
                console.log(fenec);
                var context={"fenec":fenec};
                res.render('view',context);
            }
        })
    },
    update:function(req,res){
        console.log("POST DATA", req.body);
        Fenec.update({_id:req.params.id},{name:req.body.name, age:req.body.age}, function(err,fenec){
                if(err){
                    console.log("error")
                    res.render('/fenec/req.params.id',{title:'you have errors!', errors:fenec.errors})
                } else {
                    console.log("successfully edited a Fenec");
                    res.redirect("/")
                }
        })
    },
    destroy:function(req,res){
        Fenec.remove({_id:req.params.id}, function(err,fenec){
                if(err){
                    console.log("error")
                    res.render('/fenec/req.params.id',{title:'you have errors!', errors:fenec.errors})
                } else {
                    console.log("successfully deleted a Fenec");
                    res.redirect("/")
                }
        })
    },
    showall:function(req,res){
        console.log('in show all')
        Fenec.find({},function(err,fenec){
            if(err){
                console.log("error")
            } else {
                console.log(fenec);
                var context={"fenec":fenec};
                res.render('index',context);
            }
        })
    }
}