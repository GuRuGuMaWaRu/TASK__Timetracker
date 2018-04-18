const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  time: {
    type: Number,
    required: "You must supply time!"
  },
  description: {
    type: String,
    required: "You must supply description!"
  }
});

module.exports = mongoose.model("Task", taskSchema);
