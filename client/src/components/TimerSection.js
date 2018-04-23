import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Timer from "./Timer";
import InputForm from "./InputForm";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
    textAlign: "center"
  })
});

const TimerSection = ({ classes }) => {
  return (
    <Paper className={classes.root} elevation={4}>
      <Timer />
      <InputForm />
    </Paper>
  );
};

TimerSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TimerSection);
