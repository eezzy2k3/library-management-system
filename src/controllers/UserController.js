

const  User=require('../models/UserModel')
const jwt = require("jsonwebtoken")


    const register = async (req,response)=>{
    try{
        let {name, password, email}=req.body
        const  user=await User.create({name, password, email})
        response.status(201).json({success:true, user})
    }catch (err){
        response.send(err.message)
    }

    }

    const login= async(req, res)=>{
        const {email,password} = req.body
        if(!email||!password) return res.send("please enter your email and password")
        const user = await User.findOne({email})
        if(!user) return res.status(404).json({success:false,msg:"invalid credentials"})
        if(password !== user.password)  return res.status(404).json({success:false,msg:"invalid credentials"})
        const token = jwt.sign({id:user._id,email:user.email,role:user.role,name:user.name},process.env.JWT_SECRET,{expiresIn:"30d"})
        res.status(200).json({success:true,user,token})

       
    }

   



module.exports = {register,login}