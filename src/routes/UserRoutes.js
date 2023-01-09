const express = require("express")
const register=require('../controllers/UserController')
// const registerAdmin=require('../controllers/AdminController')


const  router=express.Router()
router.post("/register", register)
// router.post("/regadmin", registerAdmin)

module.exports=router