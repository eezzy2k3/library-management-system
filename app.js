require("dotenv").config()

const express = require("express")

const app = express()


const connectDb = require("./config/config")
connectDb()

let port = process.env.PORT
if(port == null || port == ""){
    port = 3000
}

app.listen(port,()=>{
    console.log(`app is listening on ${port}`)
})