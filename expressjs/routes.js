const e = require("express");
let express = require("express");
let router = express.Router();

//define the routes
router.get("/", (req, res) => {
  res.send("Home Page");
});

router.get("/contact", (req, res) => {
  res.send("Contact page");
});

router.get("/about", (req, res) => {
  res.send("About Page");
});

router.get("/users/:userid", (req, res) => {
  res.send(req.params);
});

router.get("/students", (req, res) => {
  let students = [
    { name: "John", email: "john@example.com" },
    { name: "Mary", email: "mary@example.com" },
    { name: "jerry", email: "jerry@example.com" },
  ];

  // res.send(students);
  res.json({
    message: "Student Data",
    students: students,
  });
});

router.post("/student", (req, res) => {
  res.json({
    success: true,
    message: "Student Added to DB",
  });
});

router.get('/student/:studentid', (req, res) => {
    if (req.params.studentid == 123) {
        res.send('Hello student');
    } else {
        res.send('Hello Stranger');
    }
})

module.exports = router;
