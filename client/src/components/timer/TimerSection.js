import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import Clock from "./Clock";
import Controls from "./Controls";
import Book from "./Book";

const TimerSection = ({ classes }) => {
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography component="div" className={classes.timer}>
          <div className={classes.timerComponents}>
            <Clock />
            <Controls />
          </div>
          <Book />
        </Typography>
      </CardContent>
    </Card>
  );
};

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
  timer: {
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

TimerSection.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TimerSection);
