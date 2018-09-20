import axios from "axios";
import moment from "moment";

import * as types from "./types";
import { showTime, roundUpSeconds } from "../utils/timer";
import { months } from "../utils/dateData";
import changeDateHelper from "../utils/changeDateHelper";
import createMonthArrayHelper from "../utils/createMonthArrayHelper";

const createMonthArray = async (year, month) => {
  const res = await axios.get(
    `http://localhost:5000/tasks/getMonth/${year},${months.indexOf(month)}`
  );

  const datesWithTasks = res.data.reduce((dates, task) => {
    if (!dates.includes(task.day)) {
      return [...dates, task.day];
    }
    return dates;
  }, []);

  return createMonthArrayHelper(datesWithTasks, year, month);
};

export const bookTime = data => async (dispatch, getState) => {
  let { time } = data;
  const { description } = data;

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

  // save new task
  await axios.post("/tasks/addTask", taskData);
  // get updated tasks
  const allTasksResponse = await axios.get(
    `http://localhost:5000/tasks/getAllTasks`
  );
  // get updated month representation
  const monthArray = await createMonthArray(year, months[month]);

  dispatch({
    type: types.ADD_TASK,
    payload: {
      allTasks: allTasksResponse.data,
      monthArray
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

export const searchTasks = searchQuery => async dispatch => {
  const res = await axios.get(
    `http://localhost:5000/tasks/searchTasks/${searchQuery}`
  );

  dispatch({ type: types.GET_TASKS, payload: res.data });
};

export const getAllTasks = () => async dispatch => {
  const res = await axios.get(`http://localhost:5000/tasks/getAllTasks`);

  dispatch({ type: types.GET_TASKS, payload: res.data });
};

// export const getMonthTasks = date => async dispatch => {
//   const res = await axios.get(`http://localhost:5000/tasks/getMonth/${date}`);

//   const datesWithTasks = res.data.reduce((dates, task) => {
//     if (!dates.includes(task.day)) {
//       return [...dates, task.day];
//     }
//     return dates;
//   }, []);

//   dispatch({ type: types.GET_MONTH, payload: datesWithTasks });
// };

export const getDateTasks = date => async dispatch => {
  const res = await axios.get(`http://localhost:5000/tasks/getDay/${date}`);

  dispatch({ type: types.GET_TASKS, payload: res.data });
};

export const getDate = () => async dispatch => {
  const year = moment().format("YYYY");
  const month = moment().format("MMMM");

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

export const getTasksPage = (page, limit) => async (dispatch, getState) => {
  const tasks = await axios.get(
    `http://localhost:5000/tasks/getTasksPage/${page},${limit}`
  );

  dispatch({
    type: types.GET_TASKS,
    payload: tasks.data
  });
};
