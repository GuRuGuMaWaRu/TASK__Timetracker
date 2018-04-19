import React from "react";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";

import SearchField from "./SearchField";
import TaskList from "./TaskList";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    textAlign: "center"
  })
});

const Tasks = ({ classes }) => {
  return (
    <Paper className={classes.root} elevation={4}>
      <SearchField />
      <TaskList />
    </Paper>
  );
};

export default withStyles(styles)(Tasks);
