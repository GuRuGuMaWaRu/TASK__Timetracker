import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import BookDialog from "./BookDialog";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    [theme.breakpoints.down("xs")]: {
      margin: 0
    }
  }
});

class TimerBook extends Component {
  state = {
    open: false
  };

  handleClickOpen = () => {
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

TimerBook.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TimerBook);
