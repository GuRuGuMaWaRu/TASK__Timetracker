import { SET_DATE } from "../actions/types";

const INIT = {
  year: "---",
  month: "---"
};

export default function(state = INIT, action) {
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
