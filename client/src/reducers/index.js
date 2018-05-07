import { combineReducers } from "redux";
import monthTasksReducer from "./monthTasksReducer";
import timeReducer from "./timeReducer";
import idReducer from "./idReducer";
import tasksReducer from "./tasksReducer";

export default combineReducers({
  monthTasks: monthTasksReducer,
  time: timeReducer,
  timerID: idReducer,
  tasks: tasksReducer
});
