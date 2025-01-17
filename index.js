require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
// const {getMongoDBClientEncryption} = require("mongodb/src/deps");
const app = express();
const productRoutes = require("./routes/ProductRoutes");
const userRoutes = require("./routes/UserRoutes");

app.use(express.json());
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);


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



app.listen(8086, () => {
    console.log("Server sarted at port 8086");
});