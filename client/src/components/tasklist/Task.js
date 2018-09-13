import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import { isDesktop } from "../../utils/tasks";

const Task = ({ classes, task }) => {
  const { description } = task;

  return (
    <div
      className={classnames(classes.task, {
        [classes.taskDesktop]: isDesktop()
      })}
    >
      {description}
    </div>
  );
};

const styles = theme => ({
  task: {
    color: "red",
    flex: "1 1 60px"
  },
  taskDesktop: {
    color: "blue",
    flex: "1 1 90px"
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
