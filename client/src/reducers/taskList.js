import {
  ADD_TASK,
  GET_TASKS,
  SET_LIMIT,
  SET_LIST_TYPE
} from "../actions/types";

const INIT = {
  page: 1,
  maxPage: 1,
  limit: 0,
  taskListType: "general",
  query: ""
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
        limit: action.payload,
        taskListType: "general"
      };
    case SET_LIST_TYPE:
      return {
        ...state,
        taskListType: action.payload.listType,
        query: action.payload.query
      };
    default:
      return state;
  }
}
