import { CLEAR_TIMER, STOP_TIMER, SET_TIMER_ID } from "../actions/types";

export default function(state = false, action) {
  switch (action.type) {
    case CLEAR_TIMER:
      return false;
    case SET_TIMER_ID:
      return true;
    case STOP_TIMER:
      return false;
    default:
      return state;
  }
}
