let http = require("http");
let path = require("path");
let fs = require("fs");
// http
//   .createServer((req, res) => {
//     res.write("Hello World form NodeJS");
//     res.end();
//   })
//   .listen(3000, () => {
//     console.log("Server Started..!, visit on http://localhost:3000");
//   });

http
  .createServer((req, res) => {
    if (req.url == "/") {
      let indexFilePath = path.join(__dirname, "index.html");
      fs.readFile(indexFilePath, (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
      });
    } else if (req.url == "/contact") {
      let contactPagePath = path.join(__dirname, "contact.html");
      fs.readFile(contactPagePath, (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
      });
    } else {
      res.write("page not found");
      res.end();
    }
  })
  .listen(3000, () => {
    console.log("Server Started..");
  });
