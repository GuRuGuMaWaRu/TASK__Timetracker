const mongoose = require("mongoose");
const Task = mongoose.model("Task");

exports.addTask = async (req, res) => {
  const newTask = await new Task(req.body).save();

  res.send(newTask);
};

exports.getMonth = async (req, res) => {
  const [year, month] = req.params.date.split(",").map(parseFloat);

  const activeDays = await Task.find({
    year,
    month
  });

  res.send(activeDays);
};

exports.getTasksGeneral = async (req, res) => {
  const [page, limit] = req.params.pageData.split(",");

  const tasks = await Task.paginate(
    {},
    { page: +page, limit: +limit, sort: { date: -1 } }
  );

  res.send(tasks);
};

exports.getTasksSearch = async (req, res) => {
  const [page, limit, searchQuery] = req.params.pageData.split(",");

  const tasks = await Task.paginate(
    {
      $text: { $search: searchQuery }
    },
    { page: +page, limit: +limit, sort: { date: -1 } }
  );

  res.send(tasks);
};

exports.getTasksDate = async (req, res) => {
  const [page, limit, year, month, day] = req.params.pageData
    .split(",")
    .map(parseFloat);

  const tasks = await Task.paginate(
    {
      year,
      month,
      day
    },
    { page, limit }
  );

  res.send(tasks);
};
