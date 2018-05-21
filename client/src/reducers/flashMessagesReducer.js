import { ADD_TASK, HIDE_ADD_MSG } from "../actions/types";

export default function(state = false, action) {
  switch (action.type) {
    case ADD_TASK:
      return true;
    case HIDE_ADD_MSG:
      return false;
    default:
      return state;
  }
}
