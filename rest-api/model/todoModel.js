const mongoose = require("mongoose");

//create todo schema
const todoSchema = mongoose.Schema({
  title: { type: String, maxLength: 25, require: true },
  description: { type: String, maxLength: 150 },
  createdAt: { type: Date, default: Date.now },
});

//export as module
module.exports = mongoose.model("todos", todoSchema);
