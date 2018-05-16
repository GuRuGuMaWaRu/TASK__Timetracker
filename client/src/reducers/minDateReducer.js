import { CHANGE_DATE } from "../actions/types";

export default function(
  state = {
    year: "2015",
    month: "June"
  },
  action
) {
  switch (action.type) {
    case CHANGE_DATE:
    default:
      return state;
  }
}
