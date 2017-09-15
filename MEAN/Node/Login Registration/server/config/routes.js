// var parser=require(bodyParser.urlencoded({ extended: true }));
var User = require('../controllers/Users.js');
module.exports = function(app){

    app.get('/', function(req, res) {
        User.check(req,res);
    })

    app.post('/user/new', function(req, res) {
        console.log('in add route')
        console.log(req.body)
        User.create(req,res);
    })

    app.post('/user/login', function(req, res) {
        User.login(req,res);  
    })

}