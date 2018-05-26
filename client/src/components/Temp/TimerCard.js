import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import TimerTimer from "./TimerTimer";
import TimerBook from "./TimerBook";

const styles = {
  card: {
    minWidth: 275
  }
};

function TimerCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component="div">
          <TimerTimer />
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
