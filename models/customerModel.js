const mongoose = require('mongoose');
const uuid = require('uuid');

const customerSchema = mongoose.Schema({
    user_id:{
        type:String,
        require:[true,"Please Provide userId "],
        unique:true,
        default:()=> uuid.v4()
    },
    user_name:{
        type:String,
        lowercase:true,
        require:[true,"Please Provide your name! "]
    },
    user_email:{
        type:String,
        require:[true,"Please Provide your email!"],
        lowercase:true,
        unique:true,
    },
    user_password:{
        type:String,
        require:[true,"Please Enter your password"]
    },
    user_image:{
        type:String
    },
    total_order:{
        type:String
    },
    created_at:{
        type:Date,
        default: Date.now()
    },
    last_logged_in:{
        type:Date
    }
})

const Customer  = mongoose.model('Customer',customerSchema);

module.exports = Customer;