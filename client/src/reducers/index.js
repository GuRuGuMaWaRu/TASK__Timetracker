import { combineReducers } from "redux";
import datesReducer from "./datesReducer";
import timeReducer from "./timeReducer";
import idReducer from "./idReducer";
import tasksReducer from "./tasksReducer";

export default combineReducers({
  dates: datesReducer,
  time: timeReducer,
  timerID: idReducer,
  tasks: tasksReducer
});
