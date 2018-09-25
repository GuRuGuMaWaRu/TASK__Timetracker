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

// exports.getDay = async (req, res) => {
//   const [year, month, day] = req.params.date.split(",").map(parseFloat);

//   const dayTasks = await Task.find({
//     year,
//     month,
//     day
//   });

//   res.send(dayTasks);
// };

// exports.getAllTasks = async (req, res) => {
//   const tasks = await Task.find().sort({
//     date: -1
//   });

//   res.send(tasks);
// };

exports.getTasksPage = async (req, res) => {
  const [page, limit] = req.params.pageData.split(",");

  const tasks = await Task.paginate({}, { page: +page, limit: +limit });

  res.send(tasks);
};

exports.searchTasksPaged = async (req, res) => {
  const [page, limit, searchQuery] = req.params.pageData.split(",");

  const tasks = await Task.paginate(
    {
      $text: { $search: searchQuery }
    },
    { page: +page, limit: +limit, sort: { date: -1 } }
  );

  res.send(tasks);
};

exports.getDayPaged = async (req, res) => {
  const [page, limit, year, month, day] = req.params.pageData
    .split(",")
    .map(parseFloat);

  const tasks = await Task.paginate(
    {
      day
    },
    { page, limit }
  );

  res.send(tasks);
};
