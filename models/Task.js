const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const { Schema } = mongoose;

const taskSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  year: {
    type: Number
  },
  month: {
    type: Number
  },
  day: {
    type: Number
  },
  time: {
    type: String,
    required: "You must supply time!"
  },
  description: {
    type: String,
    required: "You must supply description!"
  }
});

taskSchema.index({
  description: "text"
});

taskSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Task", taskSchema);
