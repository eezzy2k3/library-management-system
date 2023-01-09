const mongoose = require("mongoose")
const Book=require('../models/Book')

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
    },
    books:{
        type:[],
        Required:true
    }
})


module.exports=mongoose.model("User", userSchema)
