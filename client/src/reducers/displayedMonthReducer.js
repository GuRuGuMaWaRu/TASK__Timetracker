import { CHANGE_DATE, SET_DATE } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case SET_DATE:
    case CHANGE_DATE:
      return action.payload.monthArray;
    default:
      return state;
  }
}
