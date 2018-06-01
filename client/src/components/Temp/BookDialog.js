import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle
} from "material-ui/Dialog";

import * as actions from "../../actions";
import { showTime } from "../../utils/timer";
class BookDialog extends Component {
  state = {
    time: showTime(this.props.time)
  };

  render() {
    const { isOpen, handleClose } = this.props;
    return (
      <Dialog open={isOpen} onClose={handleClose} aria-labelledby="book-time">
        <DialogTitle id="book-time">Book Time</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="time"
            label="Time"
            type="time"
            InputLabelProps={{
              shrink: true
            }}
            fullWidth
            value={this.state.time}
          />
          <TextField
            margin="dense"
            id="description"
            label="Description"
            type="string"
            InputLabelProps={{
              shrink: true
            }}
            multiline={true}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Book
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

BookDialog.propTypes = {
  time: PropTypes.number.isRequired
};

const mapStateToProps = ({ time }) => ({
  time
});

export default connect(mapStateToProps, actions)(BookDialog);
