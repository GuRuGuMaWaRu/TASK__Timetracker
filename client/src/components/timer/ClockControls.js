import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
import Clear from "@material-ui/icons/Clear";

import * as actions from "../../actions";

const ClockControls = ({
  classes,
  timerIsRunning,
  startTimer,
  clearTimer,
  stopTimer
}) => {
  return (
    <div className={classes.main}>
      <IconButton
        className={classes.button}
        color="primary"
        aria-label={timerIsRunning ? "Run" : "Pause"}
        onClick={() => {
          timerIsRunning ? stopTimer() : startTimer();
        }}
      >
        {timerIsRunning ? <Pause /> : <PlayArrow />}
      </IconButton>
      <IconButton
        className={classes.button}
        color="secondary"
        aria-label="Clear"
        onClick={clearTimer}
      >
        <Clear />
      </IconButton>
    </div>
  );
};

const styles = theme => ({
  main: {
    display: "flex",
    paddingLeft: "10px"
  },
  button: {
    margin: theme.spacing.unit,
    [theme.breakpoints.down("xs")]: {
      margin: 0
    }
  }
});

ClockControls.propTypes = {
  classes: PropTypes.object.isRequired,
  timerIsRunning: PropTypes.bool.isRequired,
  startTimer: PropTypes.func.isRequired,
  clearTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired
};

const mapStateToProps = ({ timerIsRunning }) => ({
  timerIsRunning
});

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  withStyles(styles)
)(ClockControls);
