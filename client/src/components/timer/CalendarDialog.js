import React, { Component } from "react";
import PropTypes from "prop-types";
import Dialog, { DialogContent } from "material-ui/Dialog";

import CalendarCard from "../calendar/CalendarCard";

class CalendarDialog extends Component {
  render() {
    const { isOpen } = this.props;

    return (
      <Dialog open={isOpen} aria-labelledby="calendar">
        <DialogContent>
          <CalendarCard />
        </DialogContent>
      </Dialog>
    );
  }
}

CalendarDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired
};

export default CalendarDialog;
