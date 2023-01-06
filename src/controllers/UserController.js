

const  User=require('../models/UserModel')

const bcrypt=require('bcrypt')

    const register = async (req,response)=>{
    try{
        let {name, password, email}=req.body
        const  user=await User.create({name, password, email})
        response.status(201).json({success:true, user})
    }catch (err){
        response.send(err.message)
    }

    }

    const  giveReview=async (req, res)=>{


    }



module.exports = register