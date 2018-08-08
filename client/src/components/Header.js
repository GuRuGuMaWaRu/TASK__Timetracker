import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

const Header = ({ classes }) => {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="title" color="inherit">
          Time Tracker
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

const styles = theme => ({
  toolbar: {
    [theme.breakpoints.down("sm")]: {
      minHeight: "20px",
      paddingLeft: "16px"
    }
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem"
    }
  }
});

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
