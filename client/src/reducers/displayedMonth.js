import { ADD_TASK, CHANGE_DATE, SET_DATE } from "../actions/types";

const INIT = [];

export default function(state = INIT, action) {
  switch (action.type) {
    case SET_DATE:
    case CHANGE_DATE:
    case ADD_TASK:
      return action.payload.monthArray;
    default:
      return state;
  }
}
