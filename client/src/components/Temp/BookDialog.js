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
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import * as actions from "../../actions";

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>;
}

class BookDialog extends Component {
  state = {
    selectedTab: 0,
    errorTime: false,
    errorDescription: false,
    time: "00:00",
    description: ""
  };

  validateTime = () => {
    if (this.state.selectedTab === 1) {
      const timeToArr = this.state.time.split(":").map(parseFloat);
      return timeToArr.every(time => time === 0);
    } else {
      return this.props.editTime < 1;
    }
  };

  validateInput = () => {
    const timeError = this.validateTime();
    const descriptionError = this.state.description.length === 0;

    if (timeError || descriptionError) {
      if (timeError) {
        this.setState({ errorTime: true });
      }
      if (descriptionError) {
        this.setState({ errorDescription: true });
      }

      return true;
    }

    return false;
  };

  handleChangeTime = e => {
    if (this.state.errorTime) {
      this.setState({
        errorTime: false
      });
    }
    this.setState({
      time: e.target.value
    });
  };

  handleChangeDescription = e => {
    if (this.state.errorDescription) {
      this.setState({
        errorDescription: false
      });
    }
    this.setState({
      description: e.target.value
    });
  };

  handleSubmit = () => {
    this.setState({
      time: "00:00",
      description: ""
    });

    this.props.handleClose();
  };

  handleClose = () => {
    this.setState({
      time: "00:00",
      description: ""
    });

    this.props.handleClose();
  };

  handleChangeTab = (event, value) => {
    this.setState({ selectedTab: value });
  };

  render() {
    const { isOpen, editTime } = this.props;
    const {
      selectedTab,
      errorTime,
      errorDescription,
      time,
      description
    } = this.state;

    const form = value => (
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
        value={value}
        onChange={this.handleChangeTime}
        error={errorTime}
        helperText={errorTime ? "Please enter time" : ""}
        disabled={selectedTab === 0 ? true : false}
      />
    );

    return (
      <Dialog
        open={isOpen}
        onClose={this.handleClose}
        aria-labelledby="book-time"
      >
        <DialogTitle id="book-time">Book Time</DialogTitle>
        <DialogContent>
          <Tabs
            value={selectedTab}
            onChange={this.handleChangeTab}
            indicatorColor="primary"
            textColor="primary"
            centered
            fullWidth
          >
            <Tab label="Timer" />
            <Tab label="Custom" />
          </Tabs>
          {selectedTab === 0 && <TabContainer>{form(editTime)}</TabContainer>}
          {selectedTab === 1 && <TabContainer>{form(time)}</TabContainer>}

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
            value={description}
            onChange={this.handleChangeDescription}
            error={this.state.errorDescription}
            helperText={
              this.state.errorDescription ? "Please enter description" : ""
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleSubmit} color="primary">
            Book
          </Button>
          <Button onClick={this.handleClose} color="primary">
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
