import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import ArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import ArrowRight from "@material-ui/icons/KeyboardArrowRight";

import { weekdays, months, daysInMonths } from "../utils/dateData";
import "./Calendar.css";

const showWeekdays = () =>
  weekdays.map(day => (
    <div key={day} className="month-dates--weekdays">
      {day}
    </div>
  ));

const showDays = (
  prevMonthStartingDay,
  prevMonthMaxDays,
  currMonthMaxDays,
  nextMonthMaxDays
) => {
  let days = [];

  for (let i = prevMonthStartingDay; i <= prevMonthMaxDays; i++) {
    days.push(
      <div key={`prev-${i}`} className="month-dates--prev">
        {i}
      </div>
    );
  }

  for (let i = 1; i <= currMonthMaxDays; i++) {
    days.push(
      <div key={`curr-${i}`} className="month-dates--curr">
        {i}
      </div>
    );
  }

  for (let i = 1; i <= nextMonthMaxDays; i++) {
    days.push(
      <div key={`next-${i}`} className="month-dates--next">
        {i}
      </div>
    );
  }

  return days;
};

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
  },
  disabled: {
    cursor: "not-allowed",
    color: "#cdd1d6"
  }
});

let DateSelector = ({ classes, dateType, isMax, isMin }) => {
  return (
    <div className={classes.selector}>
      <ArrowLeft
        className={isMin ? classes.disabled : classes.icon}
        style={{ fontSize: 40 }}
      />
      <span>{dateType}</span>
      <ArrowRight
        className={isMax ? classes.disabled : classes.icon}
        style={{ fontSize: 40 }}
      />
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
    currentYear: 2025,
    currentMonth: "January",
    currentDay: 26,
    maxYear: 2025,
    maxMonth: "January",
    minYear: 2018,
    minMonth: "January",
    leapYear: false
  };

  componentDidMount = () => {
    const thisYear = moment().format("YYYY"),
      thisMonth = moment().format("MMMM");

    this.setState({
      currentYear: thisYear,
      currentMonth: thisMonth,
      currentDay: moment().format("D"),
      maxYear: thisYear,
      maxMonth: thisMonth,
      leapYear: this.isLeapYear()
    });
  };

  isLeapYear = () => {
    return this.state.currentYear % 100 === 0
      ? this.state.currentYear % 400 === 0
      : this.state.currentYear % 4 === 0;
  };

  findFirstWeekday = () => {
    const date = new Date(
      `${this.state.currentMonth} 1, ${this.state.currentYear}`
    );

    return date.getDay();
  };

  displayDaysInMonth = () => {
    const weekdays = showWeekdays();
    const firstWeekday = this.findFirstWeekday();
    const prevMonth =
      months[months.indexOf(this.state.currentMonth) - 1] || months[11];
    const prevMonthStartingDay = daysInMonths[prevMonth] - firstWeekday + 1;
    // const nextMonth = months[months.indexOf(this.state.month) + 1] || months[0];
    const nextMonthEndingDay =
      42 - firstWeekday - daysInMonths[this.state.currentMonth];
    const days = showDays(
      prevMonthStartingDay,
      daysInMonths[prevMonth],
      daysInMonths[this.state.currentMonth],
      nextMonthEndingDay
    );
    const calendarView = [...weekdays, ...days];

    return calendarView;
  };

  render() {
    const { classes } = this.props;
    const {
      currentYear,
      currentMonth,
      maxYear,
      maxMonth,
      minYear,
      minMonth
    } = this.state;

    this.displayDaysInMonth();

    return (
      <Typography component="div" className={classes.calendar}>
        <DateSelector
          dateType={currentYear}
          isMax={currentYear === maxYear}
          isMin={currentYear === minYear}
        />
        <DateSelector
          dateType={currentMonth}
          isMax={currentMonth === maxMonth}
          isMin={currentMonth === minMonth}
        />
        <section className="month-dates">{this.displayDaysInMonth()}</section>
      </Typography>
    );
  }
}

Calendar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(CalendarStyles)(Calendar);
