import fs from 'fs'
//fs.readFile('employees.json','utf-8',()=>{})
fs.readFile('employees.json','utf-8',(err,data)=>{
    if(err) throw err 
    console.log(JSON.parse(data))
})