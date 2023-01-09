const express = require("express")
const registerAdmin=require('../controllers/AdminController')
const {addBook,lendBook,blockUser,deleteBook}=require("../controllers/AdminController")



const  router=express.Router()
router.post("/regadmin", registerAdmin)
router.post("/add", addBook)
router.post("/lend", lendBook)
router.delete("/block/user{id}", blockUser)



module.exports=router