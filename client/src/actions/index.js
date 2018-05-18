import axios from "axios";
import moment from "moment";
import {
  ADD_TASK,
  GET_TASKS,
  GET_MONTH,
  UPDATE_TIMER,
  CLEAR_TIMER,
  SET_TIMER_ID,
  CHANGE_DATE,
  SET_DATE
} from "./types";
import { showTime, timeFromString } from "../utils/timer";
import { months } from "../utils/dateData";
import changeDateHelper from "../utils/changeDateHelper";
import createMonthArray from "../utils/createMonthArray";

export const bookTime = data => async (dispatch, getState) => {
  let { time, description, custom } = data;

  if (!custom) {
    time = showTime(getState().time);
  } else {
    time = timeFromString(time);
  }

  if (time.length === 7) {
    time = "0" + time;
  }

  const currentDate = new Date();

  const taskData = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    day: currentDate.getDate(),
    time,
    description
  };

  await axios.post("/tasks/addTask", taskData);

  dispatch({ type: ADD_TASK, payload: custom });
};

export const setTimerID = timerID => ({ type: SET_TIMER_ID, payload: timerID });

export const updateTimer = () => ({ type: UPDATE_TIMER });

export const clearTimer = () => ({ type: CLEAR_TIMER });

export const searchTasks = searchQuery => async dispatch => {
  const res = await axios.get(
    `http://localhost:5000/tasks/searchTasks/${searchQuery}`
  );

  dispatch({ type: GET_TASKS, payload: res.data });
};

export const getAllTasks = () => async dispatch => {
  const res = await axios.get(`http://localhost:5000/tasks/getAllTasks`);

  dispatch({ type: GET_TASKS, payload: res.data });
};

export const getMonthTasks = date => async dispatch => {
  const res = await axios.get(`http://localhost:5000/tasks/getMonth/${date}`);

  const datesWithTasks = res.data.reduce((dates, task) => {
    if (!dates.includes(task.day)) {
      return [...dates, task.day];
    }
    return dates;
  }, []);

  dispatch({ type: GET_MONTH, payload: datesWithTasks });
};

export const getDateTasks = date => async dispatch => {
  const res = await axios.get(`http://localhost:5000/tasks/getDay/${date}`);

  dispatch({ type: GET_TASKS, payload: res.data });
};

export const getDate = () => async dispatch => {
  const year = moment().format("YYYY");
  const month = moment().format("MMMM");

  const res = await axios.get(
    `http://localhost:5000/tasks/getMonth/${year},${months.indexOf(month)}`
  );

  const datesWithTasks = res.data.reduce((dates, task) => {
    if (!dates.includes(task.day)) {
      return [...dates, task.day];
    }
    return dates;
  }, []);

  const monthArray = createMonthArray(datesWithTasks, year, month);

  dispatch({
    type: SET_DATE,
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
  const currentDate = getState().currentDate;
  const displayedDate = getState().displayedDate;
  const minDate = getState().minDate;
  // 1. get new date
  const { newYear: year, newMonth: month } = changeDateHelper({
    operationType,
    dateType,
    displayedDate,
    minDate,
    currentDate
  });

  // 2. use new date to request month tasks
  const res = await axios.get(
    `http://localhost:5000/tasks/getMonth/${year},${months.indexOf(month)}`
  );

  const datesWithTasks = res.data.reduce((dates, task) => {
    if (!dates.includes(task.day)) {
      return [...dates, task.day];
    }
    return dates;
  }, []);

  // 3. use month tasks to create a month array representation
  const monthArray = createMonthArray(datesWithTasks, year, month);

  // 4. dispatch action to update displayedDate and displayedMonth
  dispatch({
    type: CHANGE_DATE,
    payload: {
      year,
      month,
      monthArray
    }
  });
};
