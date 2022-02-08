const express = require("express");
const router = express.Router();
const {
  addTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controller/todoCtrl");

//create a todo api routes using router
//add todo
router.post("/todo", addTodo);
router.get("/todo", getTodos);
router.get("/todo/:id", getTodo);
router.put("/todo/:id", updateTodo);
router.delete("/todo/:id", deleteTodo);
module.exports = router;
