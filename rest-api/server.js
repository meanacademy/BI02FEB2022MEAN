const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = 3000;
const app = express();
const todoRoutes = require("./routes/todoRoutes");

//connect with mongodb db - mybitodo
mongoose
  .connect("mongodb://localhost:27017/mybitod", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log("Connection Failed", err);
  });

//use body parser to parse body data from the object
app.use(bodyParser.json());

//create virtual route and call in web browser/REST Client
app.use("/api", todoRoutes);

//start server
app.listen(PORT, () => {
  console.log("Server Started...!");
});
