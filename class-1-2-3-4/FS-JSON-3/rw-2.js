import fs from 'fs'
//fs.readFile('employees.json','utf-8',()=>{})
fs.readFile('employees.json','utf-8',(err,data)=>{
    if(err) throw err 
    
    let male_Employees=JSON.parse(data).filter((emp)=>{
        return emp.gender ==="Male"
    })
    console.log(male_Employees.length)

})