import axios from "axios";
import {
  ADD_TASK,
  GET_TASKS,
  GET_MONTH,
  UPDATE_TIMER,
  CLEAR_TIMER,
  SET_TIMER_ID
} from "./types";
import { showTime, timeFromString } from "../utils/timer";

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

  console.log(date);
  dispatch({ type: GET_MONTH, payload: datesWithTasks });
};
