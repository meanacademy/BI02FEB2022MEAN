const todoModel = require("../model/todoModel");

//Add New Todo
exports.addTodo = (req, res) => {
  // console.log(req.body);
  //create todo document
  const todo = new todoModel(req.body);
  //save todo document in mongodb
  todo.save((err, result) => {
    if (err || !result) {
      res.json({
        success: false,
        data: err,
      });
    } else {
      res.json({
        success: true,
        data: result,
      });
    }
  });
};

//Get All Todos
exports.getTodos = (req, res) => {
  todoModel.find().exec((err, todos) => {
    if (err || !todos || todos.length === 0) {
      res.json({
        success: false,
        data: "No Todos",
      });
    } else {
      res.json({
        success: true,
        data: todos,
      });
    }
  });
};

//get single todo
exports.getTodo = (req, res) => {
  todoModel.findOne({ _id: req.params.id }).exec((err, todo) => {
    if (err || !todo) {
      res.json({
        success: false,
        data: "No Todo with this id",
      });
    } else {
      res.json({
        success: true,
        data: todo,
      });
    }
  });
};

//update todo
exports.updateTodo = (req, res) => {
  const updateData = req.body;
  todoModel.findByIdAndUpdate(req.params.id, updateData).exec((err, todo) => {
    if (err) {
      res.json({
        success: false,
        data: "Update Failed",
      });
    } else {
      res.json({
        success: true,
        data: "Update Successful",
      });
    }
  });
};

//delete todo
exports.deleteTodo = (req, res) => {
  // todoModel.deleteMany().exec()
  todoModel.findByIdAndDelete(req.params.id).exec((err) => {
    if (err) {
      res.json({
        success: false,
        data: "Unable to delete todo",
      });
    } else {
      res.json({
        success: true,
        data: "Todo Deleted successfully",
      });
    }
  });
};
