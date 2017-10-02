const path = require('path')

var Survey = require('../controllers/survey.js');
module.exports = function(app){

    app.get('/survey', function(req,res) {
    
        Survey.showall(req,res);
    })

    app.post('/survey', function(req, res) {
        console.log('in add route')
        Survey.create(req,res);
    })

    app.get('/survey/:id', function(req, res) {

        Survey.show(req,res);  
    })
    app.post('/survey/:id', function(req, res) {
      
        Survey.update(req,res);  
    })
    app.delete('/survey/:id', function(req, res) {
        Survey.destroy(req,res);
    })
    // app.post('/score', function(req, res) {
        
    //     Score.create(req,res);
    // })

    // app.get('/score', function(req, res) {
       
    //     Score.showall(req,res);  
    // })

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./take2/dist/index.html"))
    });
  

}