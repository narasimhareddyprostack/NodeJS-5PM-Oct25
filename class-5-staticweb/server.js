import http from 'http'
import fs from 'fs'
import path from 'path'

const server=http.createServer((req,resp)=>{
    if(req.url==="/" || req.url==="/index"){
        fs.readFile(path.join(process.cwd(),"web","data","html","index.html"),'utf-8',(err,data)=>{
            if(err) throw err 
            resp.end(data)
        })
    }
    if(req.url==="/about"){
        fs.readFile(path.join(process.cwd(),"web","data","html","about.html"),'utf-8',(err,data)=>{
            if(err) throw err 
            resp.end(data)
        })
    }
    if(req.url==="/services"){
        fs.readFile(path.join(process.cwd(),"web","data","html","services.html"),'utf-8',(err,data)=>{
            if(err) throw err 
            resp.end(data)
        })
    }
    if(req.url==="/contact"){
        fs.readFile(path.join(process.cwd(),"web","data","html","contact.html"),'utf-8',(err,data)=>{
            if(err) throw err 
            resp.end(data)
        })
    }
})
server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log("Server is Running")
})