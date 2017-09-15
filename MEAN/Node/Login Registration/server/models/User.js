var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
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
    first_name:{
        type:String,
        trim:true,
        minlength:2,
        required:[true,"first name required"],
        },
    last_name:{
        type:String,
        trim:true,
        minlength:2,
        required:[true,"last name required"],
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
        }
    },
    birthday:{
        type:Date,
        required:[true,"must have a birthdate"],
    },
    
},{timestamps:true});
var User = mongoose.model('User',UserSchema);