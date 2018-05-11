import { GET_MONTH, CHANGE_DATE } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case GET_MONTH:
      return action.payload;
    case CHANGE_DATE:
    default:
      return state;
  }
}
