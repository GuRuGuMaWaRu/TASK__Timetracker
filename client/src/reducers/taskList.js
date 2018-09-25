import {
  ADD_TASK,
  GET_TASKS,
  SET_LIMIT,
  SEARCH_ON,
  SEARCH_OFF,
  DATE_ON,
  DATE_OFF
} from "../actions/types";

const INIT = {
  page: 1,
  maxPage: 1,
  limit: 0,
  isSearching: false,
  searchQuery: "",
  isShowingByDate: false,
  date: ""
};

export default function(state = INIT, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        page: action.payload.tasks.page,
        maxPage: action.payload.tasks.pages
      };
    case GET_TASKS:
      return {
        ...state,
        page: action.payload.page,
        maxPage: action.payload.pages
      };
    case SET_LIMIT:
      return {
        ...state,
        limit: action.limit,
        isSearching: false,
        isShowingByDate: false
      };
    case SEARCH_ON:
      return {
        ...state,
        searchQuery: action.payload,
        isSearching: true
      };
    case SEARCH_OFF:
      return {
        ...state,
        searchQuery: "",
        isSearching: false
      };
    case DATE_ON:
      return {
        ...state,
        date: action.payload,
        isShowingByDate: true
      };
    case DATE_OFF:
      return {
        ...state,
        date: "",
        isShowingByDate: false
      };
    default:
      return state;
  }
}
