import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    minWidth: 275
  }
};

function CalendarCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
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
