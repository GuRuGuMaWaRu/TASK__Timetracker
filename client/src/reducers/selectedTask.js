import { SHOW_TASK } from "../actions/types";

const INIT = {
  description: "",
  date: "",
  duration: ""
};

export default function(state = INIT, action) {
  switch (action.type) {
    case SHOW_TASK:
      return {
        ...state,
        description: action.payload.description,
        date: action.payload.date,
        duration: action.payload.duration
      };
    default:
      return state;
  }
}
