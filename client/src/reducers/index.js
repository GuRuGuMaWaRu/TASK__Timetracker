import { combineReducers } from "redux";
import currentDateReducer from "./currentDateReducer";
import displayedDateReducer from "./displayedDateReducer";
import minDateReducer from "./minDateReducer";
import displayedMonthReducer from "./displayedMonthReducer";
import monthTasksReducer from "./monthTasksReducer";
import timeReducer from "./timeReducer";
import idReducer from "./idReducer";
import tasksReducer from "./tasksReducer";

export default combineReducers({
  currentDate: currentDateReducer,
  displayedDate: displayedDateReducer,
  minDate: minDateReducer,
  displayedMonth: displayedMonthReducer,
  monthTasks: monthTasksReducer,
  time: timeReducer,
  timerID: idReducer,
  tasks: tasksReducer
});
