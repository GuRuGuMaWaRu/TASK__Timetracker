import React from "react";

const Task = ({ task }) => {
  const { description } = task;

  return <div>{description}</div>;
};

export default Task;
