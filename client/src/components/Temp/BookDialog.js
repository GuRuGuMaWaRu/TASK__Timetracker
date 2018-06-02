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
class BookDialog extends Component {
  state = {
    errorTime: false,
    errorDescription: false,
    description: ""
  };

  handleChangeTime = e => {
    this.props.updateEdit(e.target.value);
  };

  handleChangeDescription = e => {
    this.setState({
      description: e.target.value
    });
  };

  render() {
    const { isOpen, handleClose, editTime } = this.props;
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
            value={editTime}
            onChange={this.handleChangeTime}
            error={this.state.errorTime}
            helperText={this.state.errorTime ? "Please enter time" : ""}
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
            value={this.state.description}
            onChange={this.handleChangeDescription}
            error={this.state.errorDescription}
            helperText={
              this.state.errorDescription ? "Please enter description" : ""
            }
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
  editTime: PropTypes.string.isRequired,
  updateEdit: PropTypes.func.isRequired
};

const mapStateToProps = ({ editTime }) => ({
  editTime
});

export default connect(mapStateToProps, actions)(BookDialog);
