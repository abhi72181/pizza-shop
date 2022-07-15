const express=require("express")
const app=express()
const morgan=require("morgan")
const dotenv=require("dotenv")

require("colors")
dotenv.config()
// #middlewares
app.use(express.json())
app.use(morgan('dev'))

const connect=require("./configs/db")
const { connection } = require("mongoose")
// #routes



app.use("/api/pizzas", require("./controllers/PizzaController"))
app.get("/",(req,res)=>{
    return res.send('<h1>welcome to backend  </h1>')
})

const port =process.env.PORT || 8080
app.listen(port, async ()=>{
    try {
        await connect()
        console.log(`server running at port ${port}, ${connection.host} `.bgBlack.yellow)
    } catch (error) {
        console.log(`error ${error.message} `)
    }
    
})