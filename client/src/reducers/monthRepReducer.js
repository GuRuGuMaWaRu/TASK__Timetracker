import { CHANGE_DATE } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case CHANGE_DATE:
    default:
      return state;
  }
}
