import React, { Component } from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import { withStyles } from "material-ui/styles";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";

import TimerCard from "./TimerCard";
import CalendarCard from "./CalendarCard";

const styles = theme => ({
  inputSection: {
    display: "flex",
    flexDirection: "column",
    flex: "1 1",
    [theme.breakpoints.down("sm")]: {
      // flex: "1 1",
      // flexDirection: "row"
    }
  }
});

class InputSection extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.inputSection}>
        <TimerCard />
        <Hidden smDown>
          <CalendarCard />
        </Hidden>
      </div>
    );
  }
}

InputSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  withWidth()
)(InputSection);
