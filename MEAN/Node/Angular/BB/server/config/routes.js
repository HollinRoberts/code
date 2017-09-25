
var Question = require('../controllers/tasks.js');
module.exports = function(app){

    app.get('/question', function(req,res) {
    
        Question.showall(req,res);
    })

    app.post('/question', function(req, res) {
        console.log('in add route')
        Question.create(req,res);
    })
    app.post('/product', function(req, res) {
        console.log('in product create route')
        Product.create(req,res);
    })

    app.get('/user/:email', function(req, res) {
        console.log(req.params.email)
        User.show(req,res);  
    })

    app.put('/tasks/:id', function(req, res) {
        Task.update(req,res);
    })

    app.delete('/tasks/:id', function(req, res) {
        Task.destroy(req,res);
    })

  

}