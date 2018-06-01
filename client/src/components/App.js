import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import Header from "./Header";
// import TimerSection from "./TimerSection";
// import DataSection from "./DataSection";
import Footer from "./Footer";
import Main from "./Temp/Main";
import "./App.css";

const styles = theme => ({
  app: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  }
});

const App = ({ classes }) => {
  return (
    <div className={classes.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);
