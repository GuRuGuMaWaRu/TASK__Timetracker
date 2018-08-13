import { LIST_SPACE } from "../actions/types";

export default function(state = 0, action) {
  switch (action.type) {
    case LIST_SPACE:
      return action.payload;
    default:
      return state;
  }
}
