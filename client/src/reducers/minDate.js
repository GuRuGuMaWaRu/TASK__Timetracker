import { CHANGE_DATE } from "../actions/types";

const INIT = {
  year: "2015",
  month: "June"
};

export default function(state = INIT, action) {
  switch (action.type) {
    case CHANGE_DATE:
    default:
      return state;
  }
}
