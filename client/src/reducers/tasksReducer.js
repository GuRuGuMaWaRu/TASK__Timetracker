import { GET_TASKS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case GET_TASKS:
      return action.payload;
    default:
      return state;
  }
}
