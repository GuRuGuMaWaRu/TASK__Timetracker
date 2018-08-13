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
      tasksPerPage: 0
    };

    this.taskList = React.createRef();
  }

  render() {
    const { tasks, listSpace } = this.props;

    const list = tasks.map(task => <Task key={task._id} task={task} />);
    console.log(listSpace);

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

const mapStateToProps = ({ tasks, listSpace }) => ({ tasks, listSpace });

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { getAllTasks }
  )
)(TaskList);
