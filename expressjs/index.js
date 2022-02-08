const express = require("express");
const app = express();
const myRoutes = require("./routes");
const path = require("path");

const randomNumber = require("random-number");

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// })

// app.get('/home', (req, res) => {
//     res.send('Hello from homepage');
// })

// app.get('/users/:userid/book/:bookid', (req, res) => {
//      res.send(req.params.userid);
// })

let myCallback = (req, res, next) => {
  let data = req.params;
  console.log("I am from mycallback");
  data.id = "mahesh";
  next();
};

let mySecondCallback = (req, res) => {
  res.json({
    data: "you earlier visited to mycallback and updated the params",
    params: req.params,
  });
};

app.get("/test/:id", [myCallback, mySecondCallback]);

app.get("/getnumber", (req, res) => {
    let rn = randomNumber({min: 100, max: 500, integer: true});
  res.json({
    randomNumber: rn,
  });
});

app.use("/demo", myRoutes);
app.use("/", express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Server Started");
});
