import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";

const Task = ({ classes, task, desktop }) => {
  const { description, year, month, day, time } = task;
  console.log(task);

  return (
    <div
      className={classnames(classes.task, {
        [classes.taskDesktop]: desktop
      })}
    >
      <div>{description}</div>
      <div className={classes.taskDetails}>
        <div>{`${year}-${month + 1}-${day}`}</div>
        <div>{time}</div>
      </div>
    </div>
  );
};

const styles = theme => ({
  task: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flex: "1 1 60px",
    padding: ".6rem",
    "&:nth-child(odd)": {
      backgroundColor: "#f4f4f4"
    },
    "&:nth-child(even)": {
      backgroundColor: "#dbdbdb"
    }
  },
  taskDesktop: {
    flex: "1 1 90px",
    padding: "1rem"
  },
  taskDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
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
  }),
  desktop: PropTypes.bool.isRequired
};

export default withStyles(styles)(Task);
