import fs from 'fs'
let emp_Data=fs.readFileSync("employees.json",'utf-8')
let employees=JSON.parse(emp_Data)
let male_Employees=[]

for(let emp of employees){
    if(emp.gender==="Male"){
        male_Employees.push(emp)
    }
}

fs.writeFileSync("male.json",JSON.stringify(male_Employees))
console.log("New File created successfully")