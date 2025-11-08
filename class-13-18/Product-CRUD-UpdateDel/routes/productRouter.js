import expresss from 'express'
import ProductModel from '../models/Product.js'
let router = expresss.Router()

/*
usage:Fetch all Products
URL:http://127.0.0.8080/product/all
Method:GET
Required Fields:None
Access Type:Public
*/
router.get("/all",async(req,resp)=>{
    try{
        let products=await ProductModel.find();
        return resp.status(200).json(products)
    }
    catch(err){
        return resp.status(500).json({"msg":err.msg})
    }
})
/*
usage:create new product
URL:http://127.0.0.8080/product/create
Method:POST
Required Fields:pname,price,image,qty,info
Access Type:Public
*/
router.post("/create",async(req,resp)=>{
    try{
        //read form/POSTMAN data 
        let product_data=req.body;
        console.log(product_data)
        //verify product exist or not
        let product=await ProductModel.findOne({"pname":product_data.pname});
        console.log(product)
        if(product){
            return resp.status(404).json({'msg':'Product Alread Exists'})
        }
        //if product is not exits
        let new_product=new ProductModel(product_data)
        console.log(new_product)
        await new_product.save();
        return resp.status(200).json({"msg":"New Product Created","product":new_product})
    }
    catch(err){
        return resp.status(500).json({'msg':err.msg})
    }
})

/*
usage:update product by _id: ie mongodb Product _id
URL:http://127.0.0.8080/product/update/6908a276ad5558da8ec60ae7
Method:PUT
Required Fields:pname,price,image,qty,info
Access Type:Public
*/
router.put("/update/:id",async (req,resp)=>{
    try{
        let product_Id=req.params.id;
        console.log(product_Id);
        //verify product exits or using mongodb product id;
        let product=await ProductModel.findById(product_Id)
        console.log(product)
        if(!product){
            return resp.status(404).json({"msg":"Product Not Exits"})
        }
        //if proudct exits
        let updated_Product_data=req.body;
        console.log(updated_Product_data);
        product=await ProductModel.findByIdAndUpdate(product_Id,updated_Product_data)
        return resp.status(200).json({"msg":"Product Updated Successfully"})
        
    }
     catch(err){
        return resp.status(500).json({'msg':err.msg})
    }
})


/*
usage:delete product by _id: ie mongodb Product _id
URL:http://127.0.0.8080/product/delete/6908a276ad5558da8ec60ae7
Method:DELETE
Required Fields:None
Access Type:Public
*/
router.delete("/delete/:id",async (req,resp)=>{
    try{
        let product_Id=req.params.id;
        console.log(product_Id);
        //verify product exits or using mongodb product id;
        let product=await ProductModel.findById(product_Id)
        console.log(product)
        if(!product){
            return resp.status(404).json({"msg":"Product Not Exits"})
        }
        //if proudct exits - delete
        await ProductModel.findByIdAndDelete(product_Id)
        return resp.status(200).json({"msg":"Product Deleted Successfully"})
        
    }
     catch(err){
        return resp.status(500).json({'msg':err.msg})
    }
})




export default router;