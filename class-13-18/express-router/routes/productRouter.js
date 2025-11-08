import express from 'express'
let router = express.Router()
//http://127.0.0.1:8080/product/   POST 
router.post("/",(req,resp)=>{
    return resp.json({"msg":"Product Created"})
})
//http://127.0.0.1:8080/product/10   PUT
router.put("/:pid",(req,resp)=>{
    let prod_Id=req.params.pid;
    console.log(prod_Id);
    return resp.json({"msg":"Product Updated","Product Id":prod_Id})
})

export default router; //ES6 Export