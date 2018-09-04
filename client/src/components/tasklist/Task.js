import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const Task = ({ classes, task }) => {
  const { description } = task;

  return <div className={classes.task}>{description}</div>;
};

const styles = theme => ({
  task: {
    color: "red"
  }
});

Task.propTypes = {
  classes: PropTypes.object.isRequired,
  task: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    day: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
};

export default withStyles(styles)(Task);
