import express from 'express'
import fs from 'fs';
import path from 'path'
let router = express.Router()
/*
create
-------
usage: Create new employee
Rest API URL:http://127.0.0.1:8080/emp/create
Method Type:POST
Required Fields: eid,ename,esal,loc
Access Type:Public
*/
router.post("/create",async (req,resp)=>{
    console.log("Inside POST Method")
    let emp=req.body;
    console.log(emp)
    let employees=await getEmployees();
    console.log(employees.length)
    let employee = employees.find((employee)=>{
        return employee.eid === emp.eid;
    })
    console.log(employee)
    if(employee){
        return resp.status(404).json({"msg":"Buddy! Employee Already Exists"})
    }
    employees.push(emp)
    //save employees data
    await saveEmployees(employees)
    return resp.status(200).json({"msg":"New Employee Created Successfully"})
})
/* 
Read 
------
Usage: fetch all employees 
Rest API URL: http://127.0.0.1:8080/emp/read
Method Type:GET
required Fields:None
Access Type:Public */

router.get("/read",async (req,resp)=>{
    console.log("Inside Read Request...")
    let employees=await getEmployees()
    return resp.status(200).json(employees)
})

let getEmployees=()=>{
    let emp_file=path.join(process.cwd(),"data","employees.json")
    console.log(emp_file)
    let emp_Data=fs.readFileSync(emp_file,'utf-8')
    return JSON.parse(emp_Data)
}
let saveEmployees=(employees)=>{
    let emp_file=path.join(process.cwd(),"data","employees.json")
    fs.writeFileSync(emp_file,JSON.stringify(employees))
}

export default router;