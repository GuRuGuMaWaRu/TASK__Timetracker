import { CHANGE_PAGE } from "../actions/types";

const INIT = {
  page: 1
};

export default function(state = INIT, action) {
  switch (action.type) {
    case CHANGE_PAGE: {
      return {
        ...state,
        page: action.page
      };
    }
    default:
      return state;
  }
}
