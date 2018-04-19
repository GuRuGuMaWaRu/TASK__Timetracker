import { ADD_TASK, CLEAR_TIMER, SET_TIMER_ID } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case SET_TIMER_ID:
      return action.payload;
    case CLEAR_TIMER:
      return null;
    case ADD_TASK:
      return null;
    default:
      return state;
  }
}
