import express from 'express'
const app=express()

let port=8080
let host='127.0.0.1'

//Root Request: API URL: 127.0.0.1:8080/
app.get("/",(req,resp)=>{
    return resp.json({'msg':"Root Request"})
})
/*
create
-------
usage:create user/emp/product/order
API:127.0.0.1:8080/api/create 
Method:POST
Required Field: 
Access Type:Public
*/
app.post("/api/create",(req,resp)=>{
    return resp.json({"msg":"Create Request"})
})
/*
Read
-------
usage:Read user/emp/product/order
API:127.0.0.1:8080/api/read 
Method:GET
Required Field: 
Access Type:Public
*/
app.get("/api/read",(req,resp)=>{
    return resp.json({"msg":"read Request"})
})

/*
update
------
usage:update user/emp/product/order
API:127.0.0.1:8080/api/update 
Method:PUT
Required Field: 
Access Type:Public
*/
app.put("/api/update",(req,resp)=>{
    return resp.json({"msg":"Update Request"})
})

/*
update
------
usage:delete user/emp/product/order by id
API:127.0.0.1:8080/api/delete
Method:DELETE
Required Field: 
Access Type:Public
*/
app.delete("/api/delete",(req,resp)=>{
    return resp.json({"msg":"Delete Request"})
})



app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server Runnning on http://${host}:${port}/`)
})