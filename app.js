const routes = require("./routes");
const express = require("express");
const app = express();
app.use("/add-product", (req, res, next) => {
  console.log("In the middleware");
  res.send("<h1>Hello from Add Product</h1>"); // return this response only for add-product
  // next();
});
app.use((req, res, next) => {
  console.log("In the middleware 2");
  res.send("<h1>Hello from Express</h1>");
});

app.listen(3000);
//64
