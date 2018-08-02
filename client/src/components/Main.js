import React from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import { withStyles } from "material-ui/styles";
import Hidden from "@material-ui/core/Hidden";
import withWidth from "@material-ui/core/withWidth";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import TimerCard from "./Temp/TimerCard";
import CalendarCard from "./Temp/CalendarCard";
import SearchSection from "./Temp/SearchSection";
import TaskList from "./TaskList";

const Main = ({ classes }) => {
  return (
    <div className={classes.main}>
      <section className={classes.inputSection}>
        <TimerCard />
        <Hidden smDown>
          <CalendarCard />
        </Hidden>
      </section>
      <Card className={classes.displaySection}>
        <CardContent>
          <SearchSection />
          <TaskList />
        </CardContent>
      </Card>
    </div>
  );
};

const styles = theme => ({
  main: {
    display: "flex",
    flexDirection: "row",
    flex: "1 1",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column"
    }
  },
  inputSection: {
    display: "flex",
    flexDirection: "column",
    flex: "1 1"
  },
  displaySection: {
    flex: "2 1",
    [theme.breakpoints.down("sm")]: {
      flex: "10 1"
    }
  }
});

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  withStyles(styles),
  withWidth()
)(Main);
