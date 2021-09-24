const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const orders=new Schema({
    productId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    customerId:{
        type:String
    }
},{timestamp:true});

const Orders=mongoose.model("Orders", orders);
module.exports=Orders;
