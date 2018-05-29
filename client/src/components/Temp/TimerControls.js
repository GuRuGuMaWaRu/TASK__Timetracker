import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
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

class TimerControls extends Component {
  state = {
    startTime: 0
  };

  toggleTimer = () => {
    if (!this.props.timerIsRunning) {
      const startTime = Date.now();

      this.setState({
        startTime
      });

      const timerID = setInterval(() => {
        const currentTime = Math.round(
          (Date.now() - this.state.startTime) / 1000
        );
        this.props.updateTimer(currentTime);
      }, 1000);

      this.props.setTimerID(timerID);
    } else {
      clearInterval(this.props.timerID);
      this.props.clearTimer();
    }
  };

  render() {
    const { classes, timerIsRunning } = this.props;

    return (
      <div className={classes.timerControls}>
        <IconButton
          className={classes.button}
          color="primary"
          aria-label={timerIsRunning ? "Run" : "Pause"}
          onClick={this.toggleTimer}
        >
          {timerIsRunning ? <Pause /> : <PlayArrow />}
        </IconButton>
        <IconButton
          className={classes.button}
          color="secondary"
          aria-label="Clear"
        >
          <Clear />
        </IconButton>
      </div>
    );
  }
}

TimerControls.propTypes = {
  classes: PropTypes.object.isRequired,
  timerIsRunning: PropTypes.bool.isRequired,
  timerID: PropTypes.number.isRequired,
  updateTimer: PropTypes.func.isRequired,
  setTimerID: PropTypes.func.isRequired,
  clearTimer: PropTypes.func.isRequired
};

const mapStateToProps = ({ timerIsRunning, timerID }) => ({
  timerIsRunning,
  timerID
});

export default connect(mapStateToProps, actions)(
  withStyles(styles)(TimerControls)
);
