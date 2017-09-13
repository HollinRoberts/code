var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');
module.exports = {
    show:function(req,res){
        Quote.find({},function(err,quotes){
            if(err){
                console.log("error");
            } else {
                console.log(quotes);
                var context={"quotes":quotes};
                res.render('main',context);
            }
        })
    }
    
    create:function(req,res){
        var fenec = new Fenec({name:req.body.name,age:req.body.age});
        fenec.save(function(err){
            if(err){
                console.log("error")
                Fenec.find({},function(err,fenec){
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
    }
}