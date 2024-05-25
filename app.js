const routes = require("./routes");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false })); // inbuilt have next() in it
app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="post"><input type="text" name="title"><button type="submit">Add product</button></form>'
  ); // return this response only for add-product
  // next();
});
app.use("/product", (req, res, next) => {
  console.log("In the middleware 2==>", req.body);
  res.redirect("/");
});

app.use((req, res, next) => {
  console.log("In the middleware 2");
  res.send("<h1>Hello from Express</h1>");
});

app.listen(3000);
//64
