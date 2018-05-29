import { STOP_TIMER, START_TIMER } from "../actions/types";

export default function(state = false, action) {
  switch (action.type) {
    case STOP_TIMER:
      return false;
    case START_TIMER:
      return true;
    default:
      return state;
  }
}
