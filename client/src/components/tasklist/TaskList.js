import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withStyles } from "material-ui/styles";
import Typography from "@material-ui/core/Typography";

import { getAllTasks } from "../../actions";
import Task from "./Task";

const TaskList = ({ classes, tasks }) => {
  const list = tasks.map(task => <Task key={task._id} task={task} />);

  return (
    <Typography component="div" classes={{ root: classes.taskList }}>
      {list}
    </Typography>
  );
};

const styles = theme => ({
  taskList: {
    display: "flex !important",
    flexDirection: "column"
    // justifyItems: "space-between"
  }
});

TaskList.propTypes = {
  classes: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
  getAllTasks: PropTypes.func.isRequired
};

const mapStateToProps = ({ tasks }) => ({ tasks });

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { getAllTasks }
  )
)(TaskList);
