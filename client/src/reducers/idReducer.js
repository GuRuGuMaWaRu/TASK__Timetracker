import {
  ADD_TASK,
  CLEAR_TIMER,
  SET_TIMER_ID,
  STOP_TIMER
} from "../actions/types";

export default function(state = 0, action) {
  switch (action.type) {
    case SET_TIMER_ID:
      return action.payload;
    case STOP_TIMER:
    case CLEAR_TIMER:
    case ADD_TASK:
      return 0;
    default:
      return state;
  }
}
