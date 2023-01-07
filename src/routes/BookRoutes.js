const express = require("express")
const create=require('../controllers/BookController')
const deletebook=require('../controllers/AdminController')


const  router=express.Router()

router.post("/create", create)
router.delete("/delete", deletebook)

module.exports=router