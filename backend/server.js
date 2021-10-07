//external node modules, installed via npm
const express = require("express");
const app = express();

app.listen(process.env.PORT || 5000, function() {
    console.log("Server started successffuly on port 5000");
  });