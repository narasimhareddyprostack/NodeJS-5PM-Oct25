import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import empRouter from './routes/empRouter.js'
const app=express()

let port=8080
let host='127.0.0.1'

/*
usage: Application Root
Rest API URL:http://127.0.0.1:8080/
Method Type:GET
*/
//Morgan- HTTP Logger Middleware
app.use(morgan('dev'))
//To read client form Data/PM Data
app.use(express.json())
app.get("/",(req,resp)=>{
    return resp.status(200).json({"msg":"Application Root Request"})
})
//forward all employee api to empRouter file
app.use("/emp",empRouter)
app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(chalk.blue(`Server Running... http://${host}:${port}`))
})