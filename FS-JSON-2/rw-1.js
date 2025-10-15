import fs from 'fs'
let emp_Data=fs.readFileSync("employees.json",'utf-8')
console.log(typeof emp_Data)
let employees=JSON.parse(emp_Data)
console.log(typeof employees)