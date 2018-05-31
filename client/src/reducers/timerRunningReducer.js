import { TOGGLE_TIMER, CLEAR_TIMER } from "../actions/types";

export default function(state = false, action) {
  switch (action.type) {
    case CLEAR_TIMER:
      return false;
    case TOGGLE_TIMER:
      return !state;
    default:
      return state;
  }
}
