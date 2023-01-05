
const  User=require('../models/UserModel')

const bcrypt=require('bcrypt')

const registerAdmin = async (req,response)=>{
    try{
        let {name, password, email}=req.body
        const  user=await User.create({name, password, email,role:"admin"})
        response.status(201).json({success:true, user})
    }catch (err){
        response.send(err.message)
    }

}

   module.exports =registerAdmin