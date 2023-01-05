const mongoose = require("mongoose")


const userSchema=mongoose.Schema({
    name:{
        type:String,
        Required:true,
    },

    email:{
        type:String,
        Required: true,
        unique:true
    },

    password:{
        type:String,
        Required:true
    },

    role:{
        type:String,
        Required:true,
        enum:["user", "admin"],
        default:"user"
    }
})


const User=mongoose.model("User", userSchema)
module.exports=User