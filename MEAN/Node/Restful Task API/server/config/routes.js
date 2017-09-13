var mongoose= require('mongoose');
var Task = mongoose.model('Task');
var Task = require('../controllers/tasks.js');
module.exports = function(app){

    app.get('/tasks', function(req,res) {
    
        Task.showall(req,res);
    })

    app.post('/tasks', function(req, res) {
        console.log('in add route')
        Task.create(req,res);
    })

    app.get('/tasks/:id', function(req, res) {
        Task.show(req,res);  
    })

    app.put('/tasks/:id', function(req, res) {
        Task.update(req,res);
    })

    app.delete('/tasks/:id', function(req, res) {
        Task.destroy(req,res);
    })
}