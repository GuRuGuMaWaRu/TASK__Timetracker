import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import Typography from "material-ui/Typography";
import ArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import ArrowRight from "@material-ui/icons/KeyboardArrowRight";
import moment from "moment";

const DateSelectorStyles = theme => ({
  selector: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    margin: "10px auto",
    fontSize: 18
  },
  icon: {
    cursor: "pointer",
    color: "#0E0E0E"
  }
});

let DateSelector = ({ classes, dateType }) => {
  return (
    <div className={classes.selector}>
      <ArrowLeft className={classes.icon} style={{ fontSize: 40 }} />
      <span>{dateType}</span>
      <ArrowRight className={classes.icon} style={{ fontSize: 40 }} />
    </div>
  );
};

DateSelector.propTypes = {
  classes: PropTypes.object.isRequired
};

DateSelector = withStyles(DateSelectorStyles)(DateSelector);

const CalendarStyles = theme => ({
  calendar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "1.5em"
  }
});

class Calendar extends Component {
  state = {
    year: 2025,
    month: "February",
    day: 26
  };

  componentDidMount() {
    const currentDate = new Date();

    this.setState({
      year: moment().format("YYYY"),
      month: moment().format("MMMM"),
      day: moment().format("D")
    });
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;
    const { year, month, day, currentDate } = this.state;

    console.log(day);
    return (
      <Typography component="div" className={classes.calendar}>
        <DateSelector dateType={year} />
        <DateSelector dateType={month} />
        <div>Days</div>
      </Typography>
    );
  }
}

Calendar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(CalendarStyles)(Calendar);
