import { START_EDIT, UPDATE_EDIT } from "../actions/types";

export default function(state = "00:00:00", action) {
  switch (action.type) {
    case START_EDIT:
      return action.payload;
    case UPDATE_EDIT:
      return action.payload;
    default:
      return state;
  }
}
