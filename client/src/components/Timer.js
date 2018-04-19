import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";

import * as actions from "../actions";
import { showTime } from "../utils/timer";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    textAlign: "center"
  }),
  button: {
    margin: theme.spacing.unit
  }
});

class Timer extends Component {
  componentWillUnmount() {
    window.clearInterval(this.props.timerID);
  }

  startTimer = () => {
    const timerID = window.setInterval(this.props.updateTimer, 1000);
    this.props.setTimerID(timerID);
  };

  clearTimer = () => {
    window.clearInterval(this.props.timerID);
    this.props.clearTimer();
  };

  render() {
    const { time, classes } = this.props;
    return (
      <Paper className={classes.root} elevation={4}>
        <Typography variant="headline" component="h3">
          {showTime(time)}
        </Typography>
        <div className="timer__controls">
          <Button
            variant="raised"
            color="primary"
            className={classes.button}
            onClick={this.startTimer}
          >
            Start/Stop
          </Button>
          <Button
            variant="raised"
            className={classes.button}
            onClick={this.clearTimer}
          >
            Clear
          </Button>
        </div>
      </Paper>
    );
  }
}

const mapStateToProps = ({ time, timerID }) => ({
  time,
  timerID
});

export default withStyles(styles)(connect(mapStateToProps, actions)(Timer));
