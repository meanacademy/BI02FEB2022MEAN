const mongoose = require("mongoose");
const dbname = "mydb";
//connect to db

const connectToDb = () => {
  mongoose
    .connect("mongodb://localhost:27017/" + dbname, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`connection to db - ${dbname} is success`);
    })
    .catch(() => {
      console.log(`connection to db - ${dbname} is unsuccessful`);
    });
};

module.exports = {
  connect: connectToDb,
};
