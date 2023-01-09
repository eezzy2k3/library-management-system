const express = require("express")
// const create=require('../controllers/BookController')
const {addBook,deleteBook,updateBook}=require('../controllers/AdminController')



const  router=express.Router()

// router.post("/create", create)
// router.delete("/delete", deletebook)
router.post("/addbook",addBook)
router.delete("/:bookId",deleteBook)
router.put("/update/:bookId",updateBook)

module.exports=router