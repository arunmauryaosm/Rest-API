const express = require("express");
const app = express();
const connectDB = require('./db/connect');

const PORT = process.env.PORT || 5000;

const router_product = require("./routes/products")

app.get('/', (req, res) => {
    res.send("Hi, I am live");
});

// router

app.use("/api/products", router_product);


const start = async() => {
    try {
        await connectDB();
        // console.log("connectDB")
        app.listen(PORT, () => {
            console.log(`${PORT} Connected successfully`);
        })
    } catch (error) {
        console.log(error);
    }
};

start();