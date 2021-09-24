const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const owner=new Schema({
   ownerName:{
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
    }
},{timestamp:true});

const Owner=mongoose.model("Owner",owner);
module.exports=Owner;
