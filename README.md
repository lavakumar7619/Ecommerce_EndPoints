# Ecommerce_EndPoints
This is just an endpoints for adding products, orders, customer and site owner and can view the orders ,browse the products too

## To get Started

- Clone the repository

```
git clone
```

- Install all dependencies and start the server

```
npm install
npm start
```
---


## All Endpoints

- To Add Owner

```
POST
/addOwner
```
Parmaters: {email,password,Ownername}

Example

```
POST
/addowner 
{
  "name":"lava",
  "password":"lava@7169",
  "email":"lava@gmail.com"
}
```

---

- To Add Products

```
POST
/addProducts
```
Parmaters: {name,price,category}

Example
```
POST
/addProducts
{
  "name":"Iphone",
  "price":12345,
  "category":"MOBILES"
}
```
---

- To View Orders

```
GET
/allOrders
```
Example
```
Get
/addOrders
```
---

- To Add Customer

```
POST
/addCus
```
Parmaters: {customer,password,email,address,shippingAdress}

Example
```
POST
/addCus
{
  "name":"lava kumar",
  "password":"lava@1234",
  "email":"lava@gmail.com",
  "location":"bangalore",
  "city":"bangalore",
  "state":"karnatake",
  "phno":1234567890,
  "pincode":123456,
  "ShippingLocation":"bangalore",
  "ShippingCity":"bangalore",
  "ShippingState":"karntaka",
  "ShippingPhno":123456789,
  "ShippingPincode":123456,
}
```
---

- To login

```
POST
/login
```
Parmaters: {id,password}

Example
```
POST
/login
{
  "id":"614dd42c83cf41e7b924f522",
  "password":"shiva fancy store"
}
```
---
- To Browse Products

```
GET
/allProducts
```
Example
```
Get
/allProducts
```
---

- To Order

```
POST
/addOrder
```
Parmaters: {customerId,id}

Example
```
POST
/addOrder
{
  "id":"614dd7a54df9f4ddecabab60",
  "customerId":"614dd42c83cf41e7b924f522"
}
```
---

- To view order
```
GET
/getCusOrd/:id
```
Example
```
Get
/getCusOrd/614dd42c83cf41e7b924f522
```
















