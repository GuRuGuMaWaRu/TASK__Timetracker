import { ADD_TASK } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
    default:
      return state;
  }
}
