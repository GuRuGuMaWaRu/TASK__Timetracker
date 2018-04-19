import { ADD_TASK, UPDATE_TIMER, CLEAR_TIMER } from "../actions/types";

export default function(state = 0, action) {
  switch (action.type) {
    case UPDATE_TIMER:
      return state + 1;
    case CLEAR_TIMER:
      return 0;
    case ADD_TASK:
      return action.payload ? state : 0;
    default:
      return state;
  }
}
