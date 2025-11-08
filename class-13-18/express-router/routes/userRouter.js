import express from 'express'
let router = express.Router()
/*
Usage:New User Create
Rest URL:http://127.0.0.1:8080/user/
Method Type:POST 
Requried Fields:uname,email,loc
Access Type:Public
*/
router.post("/",(req,resp)=>{
    return resp.json({"msg":"User created Successfully"})
})
/*
Usage:fetch all users
Rest URL:http://127.0.0.1:8080/user/all
Method Type:GET
Requried Fields:None 
Access Type:Public
*/
router.get("/all",(req,resp)=>{
    return resp.json({"msg":"Getting all Users"})
})
/*
Usage:Updtae user by uid
Rest URL:http://127.0.0.1:8080/user/103
Method Type:PUT
Requried Fields:uname,email,loc  
Access Type:Public
*/
router.put("/:uid",(req,resp)=>{
    console.log(req.params.uid)
    let uid=req.params.uid;
    return resp.json({"msg":"User Updated","uid":uid})
})
/*
Usage:Delete user by uid
Rest URL:http://127.0.0.1:8080/user/101
Method Type:DELETE
Requried Fields:None
Access Type:Public
*/
router.delete("/:uid",(req,resp)=>{
    console.log(req.params.uid);
    let uid=req.params.uid;
    return resp.json({"msg":"User Deleted","uid":uid})
})
export default router;