import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import TimerCard from "./TimerCard";
import CalendarCard from "./CalendarCard";

const styles = theme => ({
  inputSection: {
    display: "flex",
    flexDirection: "column",
    flex: "1 1"
  }
});

class InputSection extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.inputSection}>
        <TimerCard />
        <CalendarCard />
      </div>
    );
  }
}

InputSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(InputSection);
