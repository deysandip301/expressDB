require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
// const {getMongoDBClientEncryption} = require("mongodb/src/deps");
const app = express();


app.use(express.json());

mongoose
    .connect(
        process.env.MONGODB_URL
    )
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log("Failed" , err);
    });

// productSchema
 const productSchema = new mongoose.Schema({
     product_name : {
         type: String,
         required: true
     },
     product_price : {
         type : String,
         required : true
     },
     isInStock : {
         type : Boolean,
         required : true
     },
     category : {
         type : String,
         required : true
     }
 });

 // create the product model
 const productModel = mongoose.model('products', productSchema);

 // create a product
app.post('/api/products', async(req,res) => {

    const product = productModel.create({
        product_name : req.body.product_name,
        product_price : req.body.product_price,
        isInStock : req.body.isInStock,
        category : req.body.category
    })

    console.log(product);

    return res.status(201).json({message : "Product has been created."})
})

app.listen(8086, () => {
    console.log("Server sarted at port 8086");
});