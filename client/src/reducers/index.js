import { combineReducers } from "redux";
import timeReducer from "./timeReducer";
import idReducer from "./idReducer";

export default combineReducers({
  time: timeReducer,
  timerID: idReducer
});
