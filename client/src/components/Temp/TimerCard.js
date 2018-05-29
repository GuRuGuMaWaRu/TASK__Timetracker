import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import TimerTimer from "./TimerTimer";
import TimerControls from "./TimerControls";
import TimerBook from "./TimerBook";

const styles = {
  timerCard: {
    display: "flex"
  }
};

function TimerCard(props) {
  const { classes } = props;

  return (
    <Card>
      <CardContent className={classes.timerCard}>
        <Typography component="div">
          <TimerTimer />
        </Typography>
        <Typography component="div">
          <TimerControls />
        </Typography>
        <Typography component="div">
          <TimerBook />
        </Typography>
      </CardContent>
    </Card>
  );
}

TimerCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TimerCard);
