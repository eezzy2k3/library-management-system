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


module.exports=mongoose.model("User", userSchema)
