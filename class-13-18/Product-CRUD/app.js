import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import chalk from 'chalk'
import cors from 'cors'
import dotenv from 'dotenv'
import productRouter from './routes/productRouter.js'
//express app 
let app=express()
//load application - environment variable 
dotenv.config({'path':'./config/dev.env'})
let port=process.env.PORT;
let host=process.env.HOST;
let mongo_db_url=process.env.MongoDB_LOCAL_URL;
//Read form Data
app.use(express.json())
//HTTP Logger Middleware
app.use(morgan('dev'))
//enable cors 
app.use(cors())
//Application Root Request 
app.get("/",(req,resp)=>{
    resp.status(200).json({"msg":"Application Root Request"})
})
//forward all product routes 
app.use("/product",productRouter);
//mongo DB - Connection
mongoose.connect(mongo_db_url,{})
.then((resp)=>{
    console.log("MongoDB Connection Success")
})
.catch((err)=>{
    console.error(err)
    process.exit(1)
})
app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server is Running! http://${host}:${port}`)
})