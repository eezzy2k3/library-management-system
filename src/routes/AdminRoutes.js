const express = require("express")
const registerAdmin=require('../controllers/AdminController')
const addBook=require("../controllers/AdminController")
const lendBook=require("../controllers/AdminController")
const blockUser=require("../controllers/AdminController")
const removeBook=require("../controllers/AdminController")



const  router=express.Router()
router.post("/regadmin", registerAdmin)
router.post("/add", addBook)
router.post("/lend", lendBook)
router.delete("/block/user{id}", blockUser)
router.delete("/block/book{id}", removeBook)



module.exports=router