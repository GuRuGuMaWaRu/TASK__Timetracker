import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";

const TaskDetails = ({ handleClose, isOpen, description }) => {
  handleClose = () => {
    handleClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={this.handleClose}
      aria-labelledby="task-details"
      aria-describedby="task-details-description"
    >
      <DialogTitle id="task-details">{"Task Details"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="task-details-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

BookDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default TaskDetails;
