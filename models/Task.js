const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  date: Number,
  time: Number,
  description: String
});

mongoose.model("tasks", taskSchema);
