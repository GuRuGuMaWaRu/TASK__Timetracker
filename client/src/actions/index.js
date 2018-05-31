import axios from "axios";
import moment from "moment";
import {
  ADD_TASK,
  GET_TASKS,
  UPDATE_TIMER,
  CLEAR_TIMER,
  STOP_TIMER,
  SET_TIMER_ID,
  CHANGE_DATE,
  SET_DATE,
  HIDE_ADD_MSG,
  TOGGLE_MODAL
} from "./types";
import { showTime, timeFromString } from "../utils/timer";
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
    type: ADD_TASK,
    payload: {
      custom,
      allTasks: allTasksResponse.data,
      monthArray
    }
  });
};

export const setTimerID = timerID => ({ type: SET_TIMER_ID, payload: timerID });

export const updateTimer = time => ({ type: UPDATE_TIMER, payload: time });

export const clearTimer = () => ({ type: CLEAR_TIMER });

export const stopTimer = () => ({ type: STOP_TIMER });

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

// export const getMonthTasks = date => async dispatch => {
//   const res = await axios.get(`http://localhost:5000/tasks/getMonth/${date}`);

//   const datesWithTasks = res.data.reduce((dates, task) => {
//     if (!dates.includes(task.day)) {
//       return [...dates, task.day];
//     }
//     return dates;
//   }, []);

//   dispatch({ type: GET_MONTH, payload: datesWithTasks });
// };

export const getDateTasks = date => async dispatch => {
  const res = await axios.get(`http://localhost:5000/tasks/getDay/${date}`);

  dispatch({ type: GET_TASKS, payload: res.data });
};

export const getDate = () => async dispatch => {
  const year = moment().format("YYYY");
  const month = moment().format("MMMM");

  const monthArray = await createMonthArray(year, month);

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
  const { newYear: year, newMonth: month } = changeDateHelper({
    operationType,
    dateType,
    displayedDate,
    minDate,
    currentDate
  });

  const monthArray = await createMonthArray(year, month);

  dispatch({
    type: CHANGE_DATE,
    payload: {
      year,
      month,
      monthArray
    }
  });
};

export const hideAddMsg = () => ({ type: HIDE_ADD_MSG });

export const toggleModal = () => ({ type: TOGGLE_MODAL });
