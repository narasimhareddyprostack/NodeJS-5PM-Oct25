//write javascript - read emloyees.json file
//and print all employee names
import fs from 'fs'
let emp_data=fs.readFileSync('employees.json','utf-8')
console.log(typeof emp_data)  //string

let employees=JSON.parse(emp_data)
for(let emp of employees){
    console.log(emp.firstName)
}