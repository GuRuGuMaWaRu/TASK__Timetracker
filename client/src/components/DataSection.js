import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card from "material-ui/Card";
// import Calendar from "react-calendar-material";

import SearchField from "./SearchField";
import TaskList from "./TaskList";
import Calendar from "./Calendar";

const styles = {
  dataSection: {
    display: "flex",
    marginTop: 12
  },
  card: {
    flex: "1 1 auto",
    minWidth: 275
  }
};

class DataSection extends Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.dataSection}>
        <Card className={classes.card}>
          <SearchField />
          <TaskList />
        </Card>
        <Card className={classes.card}>
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
