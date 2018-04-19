import axios from "axios";
import { ADD_TASK, UPDATE_TIMER, CLEAR_TIMER } from "./types";

//////////////////////////////////////////
export const addTask = () => async dispatch => {
  const taskData = {
    year: 2014,
    month: 11,
    day: 4,
    time: "02:29:11",
    description: "Swimming"
  };

  const res = await axios.post("/tasks/addTask", taskData);

  dispatch({ type: ADD_TASK, payload: res.data });
};

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
