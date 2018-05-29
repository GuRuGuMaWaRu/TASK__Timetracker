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
    margin: theme.spacing.unit
  }
});

class TimerControls extends Component {
  render() {
    const { classes, timerIsRunning } = this.props;

    return (
      <div className={classes.timerControls}>
        <IconButton
          className={classes.button}
          color="primary"
          aria-label={timerIsRunning ? "Run" : "Pause"}
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
  timerIsRunning: PropTypes.bool.isRequired
};

const mapStateToProps = ({ timerIsRunning }) => ({
  timerIsRunning
});

export default connect(mapStateToProps, actions)(
  withStyles(styles)(TimerControls)
);
