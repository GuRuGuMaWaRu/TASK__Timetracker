import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card from "material-ui/Card";

import SearchField from "./SearchField";
import TaskList from "./TaskList";
import Calendar from "./Calendar/Calendar";

const styles = theme => ({
  dataSection: {
    display: "flex",
    marginTop: 12,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  calendar: {
    flex: "2 1"
  }
});

class DataSection extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.dataSection}>
        <Card>
          <SearchField />
          <TaskList />
        </Card>
        <Card className={classes.calendar}>
          <Calendar />
        </Card>
      </div>
    );
  }
}

DataSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DataSection);
