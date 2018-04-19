import { combineReducers } from "redux";
import timeReducer from "./timeReducer";
import idReducer from "./idReducer";
import tasksReducer from "./tasksReducer";

export default combineReducers({
  time: timeReducer,
  timerID: idReducer,
  tasks: tasksReducer
});
