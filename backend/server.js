//external node modules, installed via npm
const express = require("express");
const app = express();

const products = require("./data/products");


app.route("/")
.get(function(req, res){
    res.send("API is running");
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


app.listen(process.env.PORT || 5000, function() {
    console.log("Server started successffuly on port 5000");
  });