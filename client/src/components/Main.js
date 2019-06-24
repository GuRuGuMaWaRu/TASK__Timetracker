import React from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import { withStyles } from "material-ui/styles";
import Hidden from "@material-ui/core/Hidden";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import TimerSection from "./timer/TimerSection";
import CalendarCard from "./calendar/CalendarCard";
import SearchSection from "./search/SearchSection";
import TaskList from "./tasklist/TaskList";

const Main = ({ classes }) => {
  return (
    <div className={classes.main}>
      <section className={classes.inputSection}>
        <TimerSection />
        <Hidden smDown>
          <CalendarCard />
        </Hidden>
      </section>
      <Card
        className={classes.displaySection}
        classes={{ root: classes.displaySectionCard }}
      >
        <CardContent classes={{ root: classes.displaySectionCardContent }}>
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
    flexDirection: "column"
    // flex: "1 1"
  },
  displaySection: {
    display: "flex",
    flexDirection: "column",
    flex: "2 1",
    [theme.breakpoints.down("sm")]: {
      flex: "7 1"
    }
  },
  displaySectionCardContent: {
    display: "flex",
    flexDirection: "column",
    flex: "2 1",
    paddingTop: "0!important",
    paddingBottom: "0!important"
  }
});

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles))(Main);
