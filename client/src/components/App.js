import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import compose from "recompose/compose";
import { withStyles } from "material-ui/styles";

import Header from "./Header";
// import TimerSection from "./TimerSection";
// import DataSection from "./DataSection";
import Main from "./Main";
import Footer from "./Footer";
import "./App.css";
import { getAllTasks, getTasksPage } from "../actions";
import { maxTasksPerPage } from "../utils/tasks";

const styles = theme => ({
  app: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  }
});

class App extends Component {
  componentDidMount() {
    // Fetch all tasks from database
    // this.props.getAllTasks();
    // 1. Find max number of tasks per page
    const limit = maxTasksPerPage();
    // 2. Get the 1st page with tasks per page depending on screen size
    this.props.getTasksPage(1, limit);
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.app}>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  getAllTasks: PropTypes.func.isRequired,
  getTasksPage: PropTypes.func.isRequired
};

export default compose(
  withStyles(styles),
  connect(
    null,
    { getAllTasks, getTasksPage }
  )
)(App);
