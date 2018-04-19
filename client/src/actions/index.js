import axios from "axios";
import { ADD_TASK, UPDATE_TIMER, CLEAR_TIMER, SET_TIMER_ID } from "./types";
import { timeFromString } from "../utils/timer";

//////////////////////////////////////////
export const bookTime = data => async (dispatch, getState) => {
  let { time, description, custom } = data;

  if (!custom) {
    time = getState().time;
  } else {
    time = timeFromString(time);
  }

  const currentDate = new Date();

  const taskData = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    day: currentDate.getDate(),
    time,
    description
  };

  const res = await axios.post("/tasks/addTask", taskData);

  dispatch({ type: ADD_TASK, payload: custom });
};

export const setTimerID = timerID => ({ type: SET_TIMER_ID, payload: timerID });

export const updateTimer = () => ({ type: UPDATE_TIMER });

export const clearTimer = () => ({ type: CLEAR_TIMER });

//////////////////////////////////////////
/*
export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const addEvent = () => async (dispatch, getState) => {
  const event = getState().form;
  const updatedEvent = { ...event, ...getStartAndDuration(event) };
  const res = await axios.post("/api/event/add", updatedEvent);

  dispatch({ type: ADD_EVENT, payload: res.data });
};

export const updateEvent = () => async (dispatch, getState) => {
  const event = getState().form;
  const updatedEvent = { ...event, ...getStartAndDuration(event) };
  await axios.post("/api/event/update", updatedEvent);
  const res = await axios.get("/api/events");

  dispatch({ type: UPDATE_EVENT, payload: res.data });
};

export const deleteEvent = id => async (dispatch, getState) => {
  const event = getState().form;
  await axios.post("/api/event/delete", event);
  const res = await axios.get("/api/events");

  dispatch({ type: DELETE_EVENT, payload: res.data });
};

export const fetchEvents = () => async dispatch => {
  const res = await axios.get("/api/events");

  dispatch({ type: FETCH_EVENTS, payload: res.data });
};

export const fetchEvent = id => async dispatch => {
  const res = await axios.post("/api/event", { id: id });

  dispatch({
    type: FILL_FORM,
    payload: {
      id: res.data[0]._id,
      title: res.data[0].title,
      fromTime: res.data[0].fromTime,
      tillTime: res.data[0].tillTime
    }
  });
};

export const updateForm = (field, value) => ({
  type: UPDATE_FORM,
  payload: {
    field,
    value
  }
});

export const clearForm = () => ({
  type: CLEAR_FORM
});

export const showErrors = errors => ({
  type: SHOW_ERRORS,
  payload: errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

*/
