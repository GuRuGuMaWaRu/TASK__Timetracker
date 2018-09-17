import { CLEAR_TIMER, STOP_TIMER, SET_TIMER_ID } from "../actions/types";

const INIT = false;

export default function(state = INIT, action) {
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
