import fs from 'fs'
//fs.readFile('employees.json','utf-8',()=>{})
fs.readFile('employees.json','utf-8',(err,data)=>{
    if(err) throw err 
    let employees=JSON.parse(data);
    
    let male_Employees=employees.filter(emp=>emp.gender==='Male')
    
    fs.writeFile("male.json",JSON.stringify(male_Employees),(err)=>{
        if(err) throw err 
        console.log("New File Created Successfully")
    })

})