const http = require("http");
const routes = require("./routes");
const express = require("express");
const app = express();
app.use((req, res, next) => {
  console.log("In the middleware");
  next();
});
app.use((req, res, next) => {
  console.log("In the middleware 2");
});

const server = http.createServer(app);
server.listen(3000); // Note: does not close the server it will be listerning for request
//31
