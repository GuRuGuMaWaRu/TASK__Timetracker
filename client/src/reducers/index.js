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

export default combineReducers({
  currentDate: currentDate,
  displayedDate: displayedDate,
  minDate: minDate,
  displayedMonth: displayedMonth,
  time: time,
  timerID: id,
  tasks: tasks,
  flashMessages: flashMessages,
  timerIsRunning: timerRunning,
  editTime: timeEdit,
  taskList: taskList
});
