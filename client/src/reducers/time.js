import { UPDATE_TIMER, CLEAR_TIMER } from "../actions/types";

const INIT = 0;

export default function(state = INIT, action) {
  switch (action.type) {
    case UPDATE_TIMER:
      return action.payload;
    case CLEAR_TIMER:
      return 0;
    default:
      return state;
  }
}
