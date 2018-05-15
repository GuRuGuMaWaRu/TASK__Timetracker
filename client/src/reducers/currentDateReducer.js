import { SET_DATE } from "../actions/types";

export default function(
  state = {
    year: "---",
    month: "---"
  },
  action
) {
  switch (action.type) {
    case SET_DATE:
      return {
        year: action.payload.year,
        month: action.payload.month
      };
    default:
      return state;
  }
}
