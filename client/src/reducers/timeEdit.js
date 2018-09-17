import { START_EDIT, UPDATE_EDIT } from "../actions/types";

const INIT = "00:00";

export default function(state = INIT, action) {
  switch (action.type) {
    case START_EDIT:
      return action.payload;
    case UPDATE_EDIT:
      return action.payload;
    default:
      return state;
  }
}
