import fs from 'fs'
//fs.readFile('abc.txt','utf-8',()=>{})
//fs.readFile('abc.txt','utf-8',(err,data)=>{})
fs.readFile('abc.txt','utf-8',(err,data)=>{
    if(err) throw err 
    console.log(data)
})