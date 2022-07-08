const express=require("express")
const app=express()
const morgan=require("morgan")
require("colors")

// #middlewares
app.use(express.json())
app.use(morgan('dev'))

// #routes
app.get("/",(req,res)=>{
    return res.send('<h1>welcome to backend </h1>')
})

app.listen(8080,()=>{
    console.log("server running at port 8080")
})