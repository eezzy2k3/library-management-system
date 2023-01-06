const mongoose = require("mongoose")


const userSchema=mongoose.Schema({
    title:{
        type:String,
        Required:true,
    },

    author:{
        type:String,
        Required: true,
        unique:true
    },

    isbn:{
        type:String,
        Required:true
    },

    edition:{
        type:String,
        Required:true,
    },

    status:{
        type:Boolean,
        Required:true,
    }
})
