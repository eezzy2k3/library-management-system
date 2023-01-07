const  Book =require('../models/Book')


const addBook = async (req,response)=>{
    try{

        const  book=await Book.create(req.body)
        response.status(201).json({success:true, book})
    }catch (err){
        response.send(err.message)
    }

}

const findABook=async (req, res)=>{
     const bookId = req.params.bookId
     const book = await Book.findById(bookId)
    if(!book)return res.status(404).json({success:false,msg:`The book with the id ${bookId} does not exist`})
    res.status(200).json({success:true,book})
}

const deleteBook=async (req, res)=>{
    const bookId = req.params.bookId
    const book = await Book.findById(bookId)
   if(!book)return res.status(404).json({success:false,msg:`The book with the id ${bookId} does not exist`})
   book = await Book.findByIdAndDelete(bookId)
}


module.exports= {addBook,findABook}
