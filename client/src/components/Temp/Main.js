import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import InputSection from "./InputSection";
import ListCard from "./ListCard";

const styles = theme => ({
  main: {
    display: "flex",
    flexDirection: "row",
    flex: "1 1",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column"
    }
  }
});

class Main extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.main}>
        <InputSection />
        <ListCard />
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Main);
