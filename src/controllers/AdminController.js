
const  User=require('../models/UserModel')
const Book=require('../models/Book')


const registerAdmin = async (req,response)=>{
    try{
        let {name, password, email}=req.body
        const  user=await User.create({name, password, email,role:"admin"})
        response.status(201).json({success:true, user})
    }catch (err){
        response.send(err.message)
    }

}

const addBook = async (req,response)=>{
    try{
        let {title, author, isbn, edition, status}=req.body
        const  book=await Book.create({title, author, isbn,edition, status})
        response.status(201).json({success:true, book})
    }catch (err){
        response.send(err.message)
    }

}


const deleteBook = async (req,response)=>{
    var books =[Book]
    const requestedBook=req.body.title
    var j=0
    books.forEach(book=>{
        j=j+1
        if (book.title==requestedBook){
            books.splice((j-1), 1)
        }
    })
    response.render({data:books})

}

const updateBook = async (req,response)=>{
    try{
        let {title, author, isbn, edition, status}=req.body
        const  book=await Book.create({title, author, isbn,edition, status})
        response.status(201).json({success:true, book})
    }catch (err){
        response.send(err.message)
    }

}





   module.exports ={registerAdmin, addBook, deleteBook, updateBook}