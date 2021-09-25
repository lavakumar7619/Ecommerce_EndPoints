const express = require("express");
const mongoose=require('mongoose');
//const { render } = require("ejs");
const morgan = require('morgan');
const Customer=require("./models/Customer");
const Products=require("./models/Products")
const Owner=require("./models/Owner");
const Orders = require("./models/Orders");
const { request } = require("express");
//express app
const app=express();

//connection to db
const dburl='mongodb+srv://Lava_Kumar:Lava7259@cluster0.de8sp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(dburl)
    .then((result)=>{app.listen(3000)
            console.log('succesful connection to db and listening at port 3000')})
    .catch((err)=>console.log(err))

//register view engine
app.set('view engine','ejs');

//middleware and static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));
app.use(express.json());


//task A
//adding owner to db
app.post("/addOwner",async(req,res)=>{
    try {
        const newOwner={
            ownerName:req.body.name,
            password:req.body.password,
            email:req.body.email
        }
        const owner=await new Owner(newOwner)
        owner.save()
        res.send(owner._id);
    } catch (error) {
        console.log(error);
        res.send("error")
    }
})
//adding products
app.post("/addProducts",async(req,res)=>{
    try {
        const newProduct={
            name:req.body.name,
            price:req.body.price,
            category:req.body.category
        }
        const products=await new Products(newProduct)
        products.save()
        res.send("succesfuly added product");
    } catch (error) {
        console.log(error);
    }
})
//view all orders
app.get("/allOrders",async(req,res)=>{
    try {
         orders=await Orders.find().sort({createdAt:-1});
         res.send(orders)
    } catch (error) {
        console.log(error);
    }
})

//Task B
//creating new customer
app.post("/addCus",async(req,res)=>{
    try {
     const newCus={
         customer:req.body.name,
         password:req.body.password,
         email:req.body.email,
         address:{
             location:req.body.location,
             city: req.body.city,
            state:req.body.state,
            phno:req.body.phno,
            picode:req.body.pincode
         },
         shippingAdress:{
            location:req.body.ShippingLocation,
            city: req.body.ShippingCity,
            state:req.body.ShippingState,
            phno:req.body.ShippingPhno,
            picode:req.body.ShippingPincode
         }
        }
         
         const customer =await new Customer(newCus);
         customer.save()
        res.send(customer._id)
    } catch (error) {
        console.log(error);
    }
 
 })
//login
app.post("/login",async(req,res)=>{
     id=req.body.id,
     password=req.body.password
    try {
        customer =await Customer.findById(id);
        
        if(!customer) return res.send("invalid customer");
        
        if(customer.password===password) {
            res.send("login succesful")
        }
        else{
            res.send("check password again")
        }
    } catch (error) {
        console.log(error);
    }
})
//browse products
app.get("/allProducts",async(req,res)=>{
    Products.find().sort({createdAt:-1})
    .then(products=>{
        res.send(products)
    })
    .catch(err=>{
        console.log(error);
    })
})
//order products
app.post("/addOrder",async(req,res)=>{
    try {
      Products.findById(req.body.id)
      .then(async(product)=>{
        const newOrder={
            productId:product._id,
            name:product.name,
            price:product.price,
            customerId:req.body.customerId
        }
        const order=await new Orders(newOrder)
        order.save()
        res.send(order._id)
      })
      .catch(err=>console.log(err))
    } catch (error) {
        console.log(error);
    }
})
//get customer orders(view orders)
app.get("/getCusOrd/:id",async(req,res)=>{
    const id=req.params.id
   try {
       Orders.find({customerId:id})
       .then(orders=>{
           res.send({orders})
       })
   } catch (error) {
       console.log(error);
   }
})