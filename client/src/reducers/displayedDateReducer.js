import { CHANGE_DATE } from "../actions/types";

export default function(
  state = {
    year: "---",
    month: "---"
  },
  action
) {
  switch (action.type) {
    case CHANGE_DATE:
    default:
      return state;
  }
}
