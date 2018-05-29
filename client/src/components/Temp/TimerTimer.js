import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

import * as actions from "../../actions";
import { showTime } from "../../utils/timer";

const styles = theme => ({
  timerTimer: {
    fontSize: "2em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.4em"
    }
  }
});
class TimerTimer extends Component {
  render() {
    const { classes, time } = this.props;
    document.title = `${showTime(time)} Tracker`;
    console.log(document.title);

    return <div className={classes.timerTimer}>{showTime(time)}</div>;
  }
}

TimerTimer.propTypes = {
  classes: PropTypes.object.isRequired,
  time: PropTypes.number.isRequired
};

const mapStateToProps = ({ time }) => ({
  time
});

export default withStyles(styles)(
  connect(mapStateToProps, actions)(TimerTimer)
);
