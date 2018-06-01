import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PlayArrow from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
import Clear from "@material-ui/icons/Clear";

import * as actions from "../../actions";

const styles = theme => ({
  timerControls: {
    display: "flex"
  },
  button: {
    margin: theme.spacing.unit,
    [theme.breakpoints.down("xs")]: {
      margin: 0
    }
  }
});

const TimerControls = ({
  classes,
  timerIsRunning,
  startTimer,
  clearTimer,
  stopTimer
}) => {
  return (
    <div className={classes.timerControls}>
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

TimerControls.propTypes = {
  classes: PropTypes.object.isRequired,
  timerIsRunning: PropTypes.bool.isRequired,
  startTimer: PropTypes.func.isRequired,
  clearTimer: PropTypes.func.isRequired,
  stopTimer: PropTypes.func.isRequired
};

const mapStateToProps = ({ timerIsRunning }) => ({
  timerIsRunning
});

export default connect(mapStateToProps, actions)(
  withStyles(styles)(TimerControls)
);
