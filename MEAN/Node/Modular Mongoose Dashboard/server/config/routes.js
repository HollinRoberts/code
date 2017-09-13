var mongoose= require('mongoose');
var Fenec = mongoose.model('Fenec');
var Fenec = require('../controllers/fenecs.js');
module.exports = function(app){

    app.get('/', function(req,res) {
        console.log("app.get")
        Fenec.showall(req,res);
    })
    
    app.get('/fenec/new', function(req, res){
        res.render('new');
    })

    app.post('/fenec', function(req, res) {
        Fenec.create(req,res);
    })

    app.get('/fenec/edit/:id', function(req, res){
        Fenec.edit(req,res);
    })

    app.get('/fenec/:id', function(req, res) {
        Fenec.show(req,res);  
    })

    app.post('/fenec/:id', function(req, res) {
        Fenec.update(req,res);
    })

    app.post('/fenec/destroy/:id', function(req, res) {
        Fenec.destroy(req,res);
    })
}