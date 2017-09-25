var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
    first:{
        type:String,
        minlength:2,
        required:[true,"first name required"],
    },
    last:{
        type:String,
        trim:true,
        minlength:2,
        required:[true,"last name required"]},
    email:{
        type:String,
        unique:true,
        validate: {
            validator: function( value ) {
                return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/.test( value );
            },
            message: "Not a valid email"
        }
    },
    password:{
        type:String,
        required:[true,"password is required"],
        minlength: 6,
        maxlength: 32,
        validate: {
            validator: function( value ) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,32}/.test( value );
            },
            message: "Password failed validation, you must have at least 1 number, uppercase and special character"
        }},
    },{timestamps:true,setDefaultOnInsert:true});
var User = mongoose.model('User',UserSchema);

var ProductSchema = new mongoose.Schema({
    title:{
        type:String,
        minlength:2,
        required:[true,"first name required"],
    },
    desc:{
        type:String,
        trim:true,
        maxlength:200,
        required:[true,"desc required"]},
    price:{
        type:Number,
        min:1,
        required:[true,"price is required"],
    },
    img:{
        type:String,
        required:[true,"img is required"],
    },
    location:{
        type:String,
        required:[true,"location is required"],
    },
    },{timestamps:true,setDefaultOnInsert:true});
var Product = mongoose.model('Product',ProductSchema);