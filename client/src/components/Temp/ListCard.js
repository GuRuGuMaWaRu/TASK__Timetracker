import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  card: {
    flex: "2 1",
    [theme.breakpoints.down("sm")]: {
      flex: "10 1"
    }
  }
});

function ListCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component="div">Search field</Typography>

        <Typography component="div">Task List</Typography>
      </CardContent>
    </Card>
  );
}

ListCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ListCard);
