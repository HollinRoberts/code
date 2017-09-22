
var Note = require('../controllers/tasks.js');
module.exports = function(app){

    app.get('/note', function(req,res) {
    
        Note.showall(req,res);
    })

    app.post('/note', function(req, res) {
        console.log('in add route')
        Note.create(req,res);
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