import { CHANGE_DATE } from "../actions/types";

const INIT = {
  monthRepresentation: [],
  currentDate: {
    year: "---",
    month: "---"
  },
  minDate: {
    year: "---",
    month: "---"
  },
  displayedDate: {
    year: "---",
    month: "---"
  }
};

export default function(state = INIT, action) {
  switch (action.type) {
    case CHANGE_DATE:
    default:
      return state;
  }
}
