import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

import * as actions from "../actions";
// import "./FlashMsg.css";

const styles = theme => ({
  flashMessage: {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    padding: "8px 20px",
    borderRadius: "13px",
    color: "#fff",
    backgroundColor: "slategrey",
    transition: "opacity 500ms ease-in-out",
    opacity: 0
  },
  entering: {
    opacity: 0
  },
  entered: {
    opacity: 1
  },
  exiting: {
    opacity: 1
  },
  exited: {
    opacity: 0
  }
});
class flashMsg extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    status: PropTypes.string.isRequired,
    hideAddMsg: PropTypes.func.isRequired
  };

  render() {
    const { classes, status } = this.props;

    // hide message in 2 seconds
    if (status === "entered") {
      setTimeout(this.props.hideAddMsg, 2000);
    }

    return (
      <Typography
        type="div"
        className={`${classes.flashMessage} ${classes[status]}`}
      >
        Congratulations! You've added a new task
      </Typography>
    );
  }
}

export default connect(null, actions)(withStyles(styles)(flashMsg));
