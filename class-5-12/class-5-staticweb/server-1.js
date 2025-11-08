import http from 'http'
import fs from 'fs'
import path from 'path'

const server=http.createServer((req,resp)=>{
    console.log(req.url)
})
server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log("Server is Running")
})