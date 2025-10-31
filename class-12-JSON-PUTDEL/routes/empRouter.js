import express from 'express'
import fs from 'fs';
import { get } from 'http';
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
/*
Update
-------
usage: Update employee by empId
Rest API URL: http://127.0.0.1:8080/emp/update/101
Method Type:PUT
Required Fields: eid,ename,esal,loc
Access Type:Public
*/
router.put("/update/:eid",async(req,resp)=>{
    //read url path parameter/varialbe
    let empId=parseInt(req.params.eid);
    console.log(typeof empId)
    //read form data/Post Man body data
    let emp_Data= req.body;
    let employees=await getEmployees();
    // verify employee exists or not?
    let employee = employees.find(emp=>emp.eid===empId)
    console.log(employee)
    if(!employee){
        return resp.status(404).json({"msg":"Employee Not Exists"})
    }
    let remaining_Employees=employees.filter(emp=>emp.eid!==empId)
    remaining_Employees.unshift(emp_Data)
    //write updated data
    await saveEmployees(remaining_Employees)
    return resp.status(200).json({"msg":"Employee Updated"})
})

/*
Delete
------
usage: delete emp by eid 
URL:http://127.0.0.1:8080/emp/delete/101
Method type:DELETE
Required Fields:none
Access Type:public
*/
router.delete("/delete/:eid",async(req,resp)=>{
    let empId=parseInt(req.params.eid);
    let employees=await getEmployees();
    let employee=employees.find((emp)=>{
        return emp.eid === empId
    })
    if(!employee){
        return resp.status(404).json({"msg":"Employee not Exits"})
    }
    let remaining_Employees=employees.filter((emp)=>{
        return emp.eid!==empId;
    })
    await saveEmployees(remaining_Employees)
    return resp.status(200).json({"msg":"Employee Deleted"})
})

//supporting functions
let getEmployees=()=>{
    let emp_file=path.join(process.cwd(),"data","employees.json")
    //console.log(emp_file)
    let emp_Data=fs.readFileSync(emp_file,'utf-8')
    return JSON.parse(emp_Data)
}
let saveEmployees=(employees)=>{
    let emp_file=path.join(process.cwd(),"data","employees.json")
    fs.writeFileSync(emp_file,JSON.stringify(employees))
}

export default router;