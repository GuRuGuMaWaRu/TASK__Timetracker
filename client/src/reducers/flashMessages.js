import { ADD_TASK, HIDE_ADD_MSG } from "../actions/types";

const INIT = false;

export default function(state = INIT, action) {
  switch (action.type) {
    case ADD_TASK:
      return true;
    case HIDE_ADD_MSG:
      return false;
    default:
      return state;
  }
}
