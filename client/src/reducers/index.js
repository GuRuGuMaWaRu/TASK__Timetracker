import { combineReducers } from "redux";
import currentDateReducer from "./currentDateReducer";
import displayedDateReducer from "./displayedDateReducer";
import minDateReducer from "./minDateReducer";
import monthRepReducer from "./monthRepReducer";
import monthTasksReducer from "./monthTasksReducer";
import timeReducer from "./timeReducer";
import idReducer from "./idReducer";
import tasksReducer from "./tasksReducer";

export default combineReducers({
  currentDate: currentDateReducer,
  displayedDate: displayedDateReducer,
  minDate: minDateReducer,
  monthRepresentation: monthRepReducer,
  monthTasks: monthTasksReducer,
  time: timeReducer,
  timerID: idReducer,
  tasks: tasksReducer
});
