require("dotenv").config()
const  userRouter=require('./src/routes/UserRoutes')
const bookRoute = require("./src/routes/BookRoutes")
const express = require("express")

const app = express()
const connectDb = require ("./config/config")

connectDb()
app.use(express.json())
app.use("/api/v1/user", userRouter)
app.use("/api/v1/book",bookRoute)




let port = process.env.PORT
if(port == null || port == ""){
    port = 3000
}

app.listen(port,()=>{
    console.log(`app is listening on ${port}`)
})