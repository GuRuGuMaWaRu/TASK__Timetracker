import { GET_TASKS } from "../actions/types";

const INIT = {
  page: 1,
  maxPage: 1
};

export default function(state = INIT, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        page: action.payload.page,
        maxPage: action.payload.pages
      };
    default:
      return state;
  }
}
