import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import classnames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { showTask } from "../../actions";

const Task = ({ classes, task, desktop, showTask }) => {
  const { description, year, month, day, time } = task;
  const date = `${year}-${month < 9 ? "0" : ""}${month + 1}-${
    day < 10 ? "0" : ""
  }${day}`;

  const handleOpen = () => {
    showTask(description, date, time);
  };

  return (
    <div
      className={classnames(classes.task, {
        [classes.taskDesktop]: desktop
      })}
      onClick={handleOpen}
    >
      <Typography noWrap={true}>{description}</Typography>
      <div className={classes.taskDetails}>
        <div>{date}</div>
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
    flex: "1 1 55px",
    padding: "1rem"
  },
  taskDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    flex: "0 0 auto"
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
  desktop: PropTypes.bool.isRequired,
  showTask: PropTypes.func.isRequired
};

export default compose(
  withStyles(styles),
  connect(
    null,
    { showTask }
  )
)(Task);
