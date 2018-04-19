import React from "react";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";

import * as actions from "../actions";
import SearchField from "./SearchField";
import List from "./List";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    textAlign: "center"
  }),
  button: {
    margin: theme.spacing.unit
  }
});

const TaskList = ({ classes }) => {
  return (
    <Paper className={classes.root} elevation={4}>
      <SearchField />
      <List />
    </Paper>
  );
};

export default withStyles(styles)(TaskList);
