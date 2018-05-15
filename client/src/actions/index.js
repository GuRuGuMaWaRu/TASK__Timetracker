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
import { weekdays, months, daysInMonths } from "../utils/dateData";

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

export const getCurrentDate = () => {
  const year = moment().format("YYYY");
  const month = moment().format("MMMM");

  return {
    type: SET_DATE,
    payload: {
      year,
      month
    }
  };
};

export const changeDate = (operation, dateType) => async (
  dispatch,
  getState
) => {
  const currentDate = getState().currentDate;
  const displayedDate = getState().displayedDate;
  const minDate = getState().minDate;
  let newYear = displayedDate.year;
  let newMonth = displayedDate.month;

  let newDate;
  if (operation === "increase" && dateType === "year") {
    newYear = +displayedDate.year + 1 + "";
  } else if (operation === "decrease" && dateType === "year") {
    newYear = +displayedDate.year - 1 + "";
  } else if (operation === "increase" && dateType === "month") {
    if (
      displayedDate.year !== currentDate.year &&
      displayedDate.month === "December"
    ) {
      newYear = +displayedDate.year + 1 + "";
      newMonth = "January";
    } else {
      newMonth = months[months.indexOf(displayedDate.month) + 1];
    }
  }

  // 2. use new date to request month tasks
  // 3. use month tasks to create an array representation
  //    of a new month
  // 4. dispatch action to update displayedDate and displayedMonth
  dispatch({
    type: CHANGE_DATE,
    payload: {
      year: newYear,
      month: newMonth
    }
  });
};
