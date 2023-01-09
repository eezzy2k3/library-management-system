
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
    const {bookId} = req.params
    const book = await Book.findById(bookId)
    if(!book)return res.status(404).json({success:false,msg:`The book with the id ${bookId} does not exist`})
    book = await Book.findByIdAndDelete(bookId)
    response.status(200).json({success:true,data:{}})

}

const updateBook = async (req,response)=>{
    try{
        const {bookId} = req.params
        let {title, author, isbn, edition, status}=req.body
        const  book =await Book.findByIdAndUpdate({_id:bookId},req.body,{new:true})
        response.status(201).json({success:true, book})
    }catch (err){
        response.send(err.message)
    }

}


const lendBook = async (req, res)=>{
    let user=User.create({name, password, email, role:"user" })
    var books =[Book]
    const requestedBook=req.body.title
    books.forEach(book=>{
        if (book.title==requestedBook){user=User.create({name, role:"user", book})}
        res.render(user)
    })

}

const blockUser=async (req, res)=>{
    var users =[User]
    const requestedUser=req.body.email
    var j=0
    users.forEach(user=>{
        j=j+1
        if (user.email==requestedUser){
            users.splice((j-1), 1)
        }
    })
    res.render({data:users})

}







   module.exports ={registerAdmin, addBook, deleteBook, updateBook, lendBook, blockUser}