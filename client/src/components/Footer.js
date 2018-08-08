import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const Footer = ({ classes }) => {
  return (
    <div className={classes.footer}>
      <Typography component="footer" classes={{ root: classes.text }}>
        2018, GuRuGuMaWaRu
      </Typography>
    </div>
  );
};

const styles = theme => ({
  footer: {
    backgroundColor: "#7f7f7f",
    padding: "10px 16px",
    [theme.breakpoints.down("sm")]: {
      padding: "2px 16px"
    }
  },
  text: {
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.7rem"
    }
  }
});

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
