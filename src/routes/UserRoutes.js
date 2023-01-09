const express = require("express")
const {register,login}=require('../controllers/UserController')
// const registerAdmin=require('../controllers/AdminController')


const  router=express.Router()
router.post("/register", register)
router.post("/login",login)
// router.post("/regadmin", registerAdmin)

module.exports=router