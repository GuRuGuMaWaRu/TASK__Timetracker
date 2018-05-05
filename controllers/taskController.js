const mongoose = require("mongoose");
const Task = mongoose.model("Task");

exports.addTask = async (req, res) => {
  const newTask = await new Task(req.body).save();

  res.send(newTask);
};

exports.getMonth = async (req, res) => {
  const [year, month] = req.params.date.split(",").map(parseFloat);
  console.log(`year: ${year}, month: ${month}`);
  const activeDays = await Task.find({
    year,
    month
  });

  res.send(activeDays);
};

exports.getDay = async (req, res) => {
  const [year, month, day] = req.params.date.split(",").map(parseFloat);

  const dayTasks = await Task.find({
    year,
    month,
    day
  });

  res.send(dayTasks);
};

exports.getAllTasks = async (req, res) => {
  const tasks = await Task.find().sort({
    date: -1
  });

  res.send(tasks);
};

exports.searchTasks = async (req, res) => {
  const tasks = await Task.find({
    $text: { $search: req.params.query }
  }).sort({
    date: -1
  });

  res.send(tasks);
};
