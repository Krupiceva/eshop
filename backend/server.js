const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const app = express();

const products = require("./data/products");


app.route("/")
.get(function(req, res){
    res.send("API is running...");
});

app.route("/api/products")
.get(function(req, res){
    res.json(products);
});

app.route("/api/products/:id")
.get(function(req, res){
    const product = products.find(p => p._id === req.params.id);
    res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
    console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`);
  });