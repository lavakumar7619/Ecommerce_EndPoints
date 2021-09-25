const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const customerSchema=new Schema({
   customer:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    address:Object,
    shippingAdress:Object
},{timestamp:true});

const Customer=mongoose.model("Customer",customerSchema);
module.exports=Customer;
