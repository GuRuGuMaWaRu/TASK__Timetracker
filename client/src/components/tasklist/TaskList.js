import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withStyles } from "material-ui/styles";
import Typography from "@material-ui/core/Typography";

import { getAllTasks } from "../../actions";

class TaskList extends Component {
  componentDidMount() {
    this.props.getAllTasks();
  }

  render() {
    const { tasks } = this.props;

    console.log(tasks);

    return <Typography component="div">TaskList</Typography>;
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
