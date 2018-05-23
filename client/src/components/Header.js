import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

const styles = theme => ({
  body: {
    margin: 0
  },
  appBar: {
    [theme.breakpoints.down("sm")]: {
      boxShadow: "none"
    }
  },
  toolbar: {
    [theme.breakpoints.down("sm")]: {
      minHeight: "40px",
      paddingLeft: "18px"
    }
  }
});

const Header = ({ classes }) => {
  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="secondary">
        <Toolbar className={classes.toolbar}>
          <Typography variant="title" color="inherit">
            Time Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
