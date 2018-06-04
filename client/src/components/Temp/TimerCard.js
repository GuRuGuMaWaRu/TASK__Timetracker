import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import TimerTimer from "./TimerTimer";
import TimerControls from "./TimerControls";
import TimerBook from "./TimerBook";

const styles = theme => ({
  cardContent: {
    [theme.breakpoints.down("xs")]: {
      paddingTop: "5px",
      "&:last-child": {
        paddingBottom: "5px"
      }
    }
  },
  timerCard: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  }
});

function TimerCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography component="div" className={classes.timerCard}>
          <TimerTimer />
          <TimerControls />
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
