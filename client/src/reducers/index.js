import { combineReducers } from "redux";
import currentDate from "./currentDate";
import displayedDate from "./displayedDate";
import minDate from "./minDate";
import displayedMonth from "./displayedMonth";
import time from "./time";
import id from "./id";
import tasks from "./tasks";
import taskList from "./taskList";
import flashMessages from "./flashMessages";
import timerRunning from "./timerRunning";
import timeEdit from "./timeEdit";
import selectedTask from "./selectedTask";

export default combineReducers({
  currentDate,
  displayedDate,
  minDate,
  displayedMonth,
  time,
  timerID: id,
  tasks,
  flashMessages,
  timerIsRunning: timerRunning,
  editTime: timeEdit,
  taskList,
  selectedTask
});
