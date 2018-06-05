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
  card: {
    flex: "0 0 auto",
    [theme.breakpoints.down("sm")]: {
      flex: "1 0 auto"
    }
  },
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
    justifyContent: "space-between",
    alignItems: "center"
    // [theme.breakpoints.down("sm")]: {
    //   justifyContent: "space-between",
    //   alignItems: "center"
    // }
  },
  timerComponents: {
    display: "flex",
    alignItems: "center"
  }
});

function TimerCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography component="div" className={classes.timerCard}>
          <div className={classes.timerComponents}>
            <TimerTimer />
            <TimerControls />
          </div>
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
