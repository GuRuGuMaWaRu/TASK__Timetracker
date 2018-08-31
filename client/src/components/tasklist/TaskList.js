import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withStyles } from "material-ui/styles";
import Typography from "@material-ui/core/Typography";

import { getAllTasks } from "../../actions";
import Task from "./Task";

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // tasksPerPage: 0,
      maxTasksPerPage: 0,
      currentlyDisplayedTasks: [],
      firstDisplayedTaskID: null,
      lastDisplayedTaskID: null,
      topCurrentTask: null
    };
  }

  componentDidMount() {
    // 1. Find if our screen is small or large (different layout for each)
    const isDesktop = window.innerHeight > 1000 ? true : false;
    // 2. Set different Task List height depending on layout
    const listHeight = isDesktop
      ? window.innerHeight - 136
      : window.innerHeight - 166;
    // 3. Fetch all tasks from database
    // this.props.getAllTasks();

    this.setState(
      {
        maxTasksPerPage: isDesktop
          ? Math.floor(listHeight / 100)
          : Math.floor(listHeight / 60)
      },
      () => {
        this.setState({
          firstDisplayedTaskID: 0,
          lastDisplayedTaskID: this.state.maxTasksPerPage - 1
        });
      }
    );
  }

  render() {
    const { tasks } = this.props;

    const list = tasks.map(task => <Task key={task._id} task={task} />);

    return (
      <Typography component="div" ref={this.taskList}>
        {list}
      </Typography>
    );
  }
}

const styles = theme => ({});

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
