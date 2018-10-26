import axios from "axios";
import format from "date-fns/format";

import * as types from "./types";
import { showTime, roundUpSeconds } from "../utils/timer";
import { months } from "../utils/dateData";
import changeDateHelper from "../utils/changeDateHelper";
import createMonthArrayHelper from "../utils/createMonthArrayHelper";

const createMonthArray = async (year, month) => {
  const res = await axios.get(
    `http://localhost:5000/tasks/getMonth/${year},${months.indexOf(month)}`
  );

  const datesWithTasks = {};

  res.data.forEach(task => {
    if (datesWithTasks[task.day]) {
      datesWithTasks[task.day] = datesWithTasks[task.day] + 1;
    } else {
      datesWithTasks[task.day] = 1;
    }
  });

  return createMonthArrayHelper(datesWithTasks, year, month);
};

const getPage = async (page, limit, listType, queryData) => {
  let route = "";

  switch (listType) {
    case "search":
      route = `http://localhost:5000/tasks/getTasksSearch/${page},${limit},${queryData}`;
      break;
    case "date":
      route = `http://localhost:5000/tasks/getTasksDate/${page},${limit},${queryData}`;
      break;
    case "general":
    default:
      route = `http://localhost:5000/tasks/getTasksGeneral/${page},${limit}`;
  }

  return await axios.get(route);
};

export const bookTime = data => async (dispatch, getState) => {
  let { time } = data;
  const { description } = data;
  const { page, limit, taskListType, query } = getState().taskList;

  if (time.length === 7) {
    time = `0${time}`;
  }

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();

  const taskData = {
    year,
    month,
    day,
    time,
    description
  };

  await axios.post("/tasks/addTask", taskData);
  const tasks = await getPage(page, limit, taskListType, query);
  const monthArray = await createMonthArray(year, months[month]);

  dispatch({
    type: types.ADD_TASK,
    payload: {
      monthArray,
      tasks: tasks.data,
      year: year,
      month: months[month]
    }
  });
};

export const startTimer = () => async (dispatch, getState) => {
  const { time } = getState();
  const startTime = Date.now() - time * 1000;

  const timerID = setInterval(() => {
    const currentTime = Math.round((Date.now() - startTime) / 1000);

    dispatch({
      type: types.UPDATE_TIMER,
      payload: currentTime
    });
  }, 1000);

  dispatch({
    type: types.SET_TIMER_ID,
    payload: timerID
  });
};

export const setTimerID = timerID => ({
  type: types.SET_TIMER_ID,
  payload: timerID
});

export const updateTimer = time => ({
  type: types.UPDATE_TIMER,
  payload: time
});

export const clearTimer = () => async (dispatch, getState) => {
  const { timerID } = getState();

  clearInterval(timerID);

  dispatch({ type: types.CLEAR_TIMER });
};

export const stopTimer = () => async (dispatch, getState) => {
  const { timerID } = getState();

  clearInterval(timerID);

  dispatch({ type: types.STOP_TIMER });
};

export const getDate = () => async dispatch => {
  const [year, month] = format(new Date(), "YYYY MMMM").split(" ");

  const monthArray = await createMonthArray(year, month);

  dispatch({
    type: types.SET_DATE,
    payload: {
      year,
      month,
      monthArray
    }
  });
};

export const changeDate = (operationType, dateType) => async (
  dispatch,
  getState
) => {
  const { currentDate, displayedDate, minDate } = getState();
  const { newYear: year, newMonth: month } = changeDateHelper({
    operationType,
    dateType,
    displayedDate,
    minDate,
    currentDate
  });

  const monthArray = await createMonthArray(year, month);

  dispatch({
    type: types.CHANGE_DATE,
    payload: {
      year,
      month,
      monthArray
    }
  });
};

export const hideAddMsg = () => ({ type: types.HIDE_ADD_MSG });

export const startEdit = () => async (dispatch, getState) => {
  const { time } = getState();
  const processedTime = roundUpSeconds(showTime(time));

  dispatch({
    type: types.START_EDIT,
    payload: processedTime
  });
};

export const updateEdit = time => ({
  type: types.UPDATE_EDIT,
  payload: time
});

export const getTasksPage = page => async (dispatch, getState) => {
  const { limit, taskListType, query } = getState().taskList;
  const tasks = await getPage(page, limit, taskListType, query);

  dispatch({
    type: types.GET_TASKS,
    payload: tasks.data
  });
};

export const setPageLimit = limit => ({
  type: types.SET_LIMIT,
  payload: limit
});

export const changeListType = (listType, query) => ({
  type: types.SET_LIST_TYPE,
  payload: { listType, query }
});

export const showTask = (description, date, duration) => ({
  type: types.SHOW_TASK,
  payload: { description, date, duration }
});
