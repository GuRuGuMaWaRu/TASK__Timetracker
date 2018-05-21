import { TOGGLE_ADD_MSG } from "../actions/types";

export default function(state = false, action) {
  switch (action.payload) {
    case TOGGLE_ADD_MSG:
      return !state;
    default:
      return state;
  }
}
