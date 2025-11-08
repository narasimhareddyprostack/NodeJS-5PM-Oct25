import mongoose from "mongoose";

let userSchema = new mongoose.Schema({
    uname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    mobile:{
        type:String,
        require:true
    }
})
let User=mongoose.model("users",userSchema)
export default User;