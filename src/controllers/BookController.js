const  Book =require('../models/Book')


const addBook = async (req,response)=>{
    try{

        const  book=await Book.create(req.body)
        response.status(201).json({success:true, book})
    }catch (err){
        response.send(err.message)
    }

}

const deleteBook=async (req, res)=>{
     const book = req.params.bookId
    
}


module.exports=addBook
