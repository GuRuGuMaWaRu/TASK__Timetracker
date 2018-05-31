import { combineReducers } from "redux";
import currentDateReducer from "./currentDateReducer";
import displayedDateReducer from "./displayedDateReducer";
import minDateReducer from "./minDateReducer";
import displayedMonthReducer from "./displayedMonthReducer";
import timeReducer from "./timeReducer";
import idReducer from "./idReducer";
import tasksReducer from "./tasksReducer";
import flashMessagesReducer from "./flashMessagesReducer";
import timerRunningReducer from "./timerRunningReducer";
import modalReducer from "./modalReducer";

export default combineReducers({
  currentDate: currentDateReducer,
  displayedDate: displayedDateReducer,
  minDate: minDateReducer,
  displayedMonth: displayedMonthReducer,
  time: timeReducer,
  timerID: idReducer,
  tasks: tasksReducer,
  flashMessages: flashMessagesReducer,
  timerIsRunning: timerRunningReducer,
  modalOpen: modalReducer
});
