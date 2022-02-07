const mongoose = require('mongoose');

//Create a schema
const studentSchema = mongoose.Schema({
  name: String,
  address: { type: String, require: true },
  contactNo: { type: Number, require: true },
  isGraduted: { type: Boolean, default: true },
});

// define or create model
const studentModel = mongoose.model("students", studentSchema);


module.exports = {
    model : studentModel
}