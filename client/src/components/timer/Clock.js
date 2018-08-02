import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withStyles } from "material-ui/styles";

import { showTime } from "../../utils/timer";

const Clock = ({ classes, time }) => {
  document.title = `${showTime(time)} Tracker`;

  return <div className={classes.main}>{showTime(time)}</div>;
};

const styles = theme => ({
  main: {
    fontSize: "2em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.4em"
    }
  }
});

Clock.propTypes = {
  classes: PropTypes.object.isRequired,
  time: PropTypes.number.isRequired
};

const mapStateToProps = ({ time }) => ({ time });

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(Clock);
