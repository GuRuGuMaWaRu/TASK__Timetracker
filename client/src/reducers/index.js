import { combineReducers } from "redux";
import calendarReducer from "./calendarReducer";
import monthTasksReducer from "./monthTasksReducer";
import timeReducer from "./timeReducer";
import idReducer from "./idReducer";
import tasksReducer from "./tasksReducer";

export default combineReducers({
  calendar: calendarReducer,
  monthTasks: monthTasksReducer,
  time: timeReducer,
  timerID: idReducer,
  tasks: tasksReducer
});
