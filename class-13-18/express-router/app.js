import express from 'express'
import morgan from 'morgan'
import userRouter from './routes/userRouter.js';
import prodRouter from './routes/productRouter.js'
let app=express()
let host='127.0.0.1'
let port=8080
app.get("/",(req,resp)=>{
    return resp.json({"msg":"Application Root Request"})
})
//enable middleware ie http logger
app.use(morgan('combined'))
//application routues 
app.use("/user",userRouter)
app.use("/product",prodRouter)


app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server Running.. http://${host}:${port}/`)
})