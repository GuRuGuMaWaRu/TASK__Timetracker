import { ADD_TASK, GET_TASKS } from "../actions/types";

const INIT = [];

export default function(state = INIT, action) {
  switch (action.type) {
    case GET_TASKS:
      return action.payload.docs;
    case ADD_TASK:
      return action.payload.tasks.docs;
    default:
      return state;
  }
}
