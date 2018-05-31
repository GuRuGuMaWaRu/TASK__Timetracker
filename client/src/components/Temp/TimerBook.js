import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import * as actions from "../../actions";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    [theme.breakpoints.down("xs")]: {
      margin: 0
    }
  }
});

class TimerBook extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Button variant="outlined" color="secondary" className={classes.button}>
        book
      </Button>
    );
  }
}

TimerBook.propTypes = {
  classes: PropTypes.object.isRequired
};

export default connect(null, actions)(withStyles(styles)(TimerBook));
