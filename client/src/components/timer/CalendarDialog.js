import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
// import Typography from "@material-ui/core/Typography";

// import CalendarCard from "../calendar/CalendarCard";

class CalendarDialog extends Component {
  render() {
    const { classes, isOpen, handleClose } = this.props;

    return (
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="calendar"
        aria-describedby="calendar"
      >
        {/* <Typography component="div" className={classes.dialog}>
          <CalendarCard />
        </Typography> */}
      </Modal>
    );
  }
}

const styles = theme => ({
  dialog: {
    boxSizing: "border-box",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflowY: "auto",
    width: "80%"
  }
});

CalendarDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default withStyles(styles)(CalendarDialog);
