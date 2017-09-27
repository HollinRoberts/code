const path = require('path')
var Score = require('../controllers/score.js');
var Question = require('../controllers/tasks.js');
module.exports = function(app){

    app.get('/question', function(req,res) {
    
        Question.showall(req,res);
    })

    app.post('/question', function(req, res) {
        console.log('in add route')
        Question.create(req,res);
    })
    app.post('/score', function(req, res) {
        
        Score.create(req,res);
    })

    app.get('/score', function(req, res) {
       
        Score.showall(req,res);  
    })

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./bb/dist/index.html"))
    });
  

}