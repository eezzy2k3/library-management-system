const express = require("express")
// const create=require('../controllers/BookController')
const {deletebook,addBook}=require('../controllers/AdminController')


const  router=express.Router()

// router.post("/create", create)
// router.delete("/delete", deletebook)
router.post("/addbook",addBook)

module.exports=router