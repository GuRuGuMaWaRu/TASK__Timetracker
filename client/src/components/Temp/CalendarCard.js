import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  calendarCard: {
    display: "flex"
  }
};

function CalendarCard(props) {
  const { classes } = props;

  return (
    <Card>
      <CardContent className={classes.calendarCard}>
        <Typography component="div">Selection buttons</Typography>

        <Typography component="div">Calendar</Typography>
      </CardContent>
    </Card>
  );
}

CalendarCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CalendarCard);
