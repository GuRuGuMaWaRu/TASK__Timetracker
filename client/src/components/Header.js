import React from "react";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";

const Header = () => {
  return (
    <div>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Time Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
