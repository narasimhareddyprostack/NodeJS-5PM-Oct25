import express from 'express'
let app=express()

/*
Usage:application Root request
API URL:http:127.0.0.1:8080/
Method Type:GET
Required Fields:None
Access Type:Public
*/
app.get("/",(req,resp)=>{
    return resp.json({"msg":"Root Request"})
})

/*
Usage:application About request
API URL:http:127.0.0.1:8080/about
Method Type:GET
Required Fields:None
Access Type:Public
*/
app.get("/about",(req,resp)=>{
    return resp.json({"msg":"About  Request"})
})


/*
Usage:application Services request
API URL:http:127.0.0.1:8080/services
Method Type:GET
Required Fields:None
Access Type:Public
*/
app.get("/services",(req,resp)=>{
    return resp.json({"msg":"Services  Request"})
})
app.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err 
    console.log(`Server is Running  http://127.0.0.1:8080/`)
})