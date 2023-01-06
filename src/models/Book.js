const mongoose = require("mongoose")


const bookSchema=mongoose.Schema({
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
    },

    review:{
        type:Number

    }
})

module.exports=mongoose.model("Book", bookSchema)

