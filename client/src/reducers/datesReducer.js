import { GET_MONTH } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case GET_MONTH:
      return action.payload;
    default:
      return state;
  }
}
