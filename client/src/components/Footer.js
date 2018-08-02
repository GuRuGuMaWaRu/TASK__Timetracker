import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    color: "#fff"
  },
  footer: {
    backgroundColor: "#7f7f7f"
  }
};

function Footer(props) {
  const { classes } = props;

  return (
    <div>
      <Card>
        <CardContent
          className={classes.footer}
          style={{ padding: "10px 16px" }}
        >
          <Typography component="footer" style={{ color: "#fff" }}>
            2018, GuRuGuMaWaRu
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
