import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import BookDialog from "./BookDialog";
import { stopTimer, startEdit } from "../../actions";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    [theme.breakpoints.down("xs")]: {
      margin: 0
    }
  }
});

class Book extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
    if (this.props.timerIsRunning) {
      this.props.stopTimer();
    }
    this.props.startEdit();
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          onClick={this.handleClickOpen}
        >
          book
        </Button>
        <BookDialog isOpen={this.state.open} handleClose={this.handleClose} />
      </div>
    );
  }
}

Book.propTypes = {
  classes: PropTypes.object.isRequired,
  timerIsRunning: PropTypes.bool.isRequired,
  stopTimer: PropTypes.func.isRequired,
  startEdit: PropTypes.func.isRequired
};

const mapStateToProps = ({ timerIsRunning }) => ({
  timerIsRunning
});

export default connect(
  mapStateToProps,
  { stopTimer, startEdit }
)(withStyles(styles)(Book));
