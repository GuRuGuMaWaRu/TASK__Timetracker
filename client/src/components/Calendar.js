import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import moment from "moment";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import ArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import ArrowRight from "@material-ui/icons/KeyboardArrowRight";

import { weekdays, months, daysInMonths } from "../utils/dateData";
import DateSelectorTest from "./Calendar/DateSelector";
import * as actions from "../actions";
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
  nextMonthMaxDays,
  daysWithTasks
) => {
  let days = [];

  // show days from previous month
  for (let i = prevMonthStartingDay; i <= prevMonthMaxDays; i++) {
    days.push(
      <div key={`prev-${i}`} className="month-dates--prev">
        {i}
      </div>
    );
  }

  // show days from current month
  for (let i = 1; i <= currMonthMaxDays; i++) {
    days.push(
      <div
        key={`curr-${i}`}
        data-date={i}
        className={`month-dates--curr ${
          daysWithTasks.includes(i) ? "with-tasks" : ""
        }`}
      >
        {i}
      </div>
    );
  }

  // show days from next month
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

let DateSelector = ({
  classes,
  dateValue,
  dateType,
  isMax,
  isMin,
  handleIncreaseDate,
  handleDecreaseDate
}) => {
  return (
    <div className={classes.selector}>
      <ArrowLeft
        className={isMin ? classes.disabled : classes.icon}
        style={{ fontSize: 40 }}
        onClick={() => handleDecreaseDate(dateType)}
      />
      <span>{dateValue}</span>
      <ArrowRight
        className={isMax ? classes.disabled : classes.icon}
        style={{ fontSize: 40 }}
        onClick={() => handleIncreaseDate(dateType)}
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
    currentYear: 2018,
    currentMonth: "January",
    // currentDay: 26,
    maxYear: 2025,
    maxMonth: "January",
    minYear: 2016,
    minMonth: "January",
    leapYear: false
  };

  componentDidMount = () => {
    const thisYear = +moment().format("YYYY");
    const thisMonth = moment().format("MMMM");

    this.setState({
      currentYear: thisYear,
      currentMonth: thisMonth,
      // currentDay: moment().format("D"),
      maxYear: thisYear,
      maxMonth: thisMonth,
      leapYear: this.isLeapYear()
    });

    // get dates with tasks for the current month
    this.props.getMonthTasks(
      `${this.state.currentYear},${months.indexOf(thisMonth)}`
    );

    this.props.getCurrentDate();
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

  getDaysInCurrentMonth = () => {
    if (
      this.state.currentMonth === "February" &&
      this.isLeapYear(this.state.currentYear)
    ) {
      return daysInMonths[this.state.currentMonth] + 1;
    }

    return daysInMonths[this.state.currentMonth];
  };

  displayDaysInMonth = (currentMonth, months, daysInMonths) => {
    const firstWeekday = this.findFirstWeekday();
    const prevMonth = months[months.indexOf(currentMonth) - 1] || months[11];
    const prevMonthStartingDay = daysInMonths[prevMonth] - firstWeekday + 1;
    const daysInCurrentMonth = this.getDaysInCurrentMonth();
    const nextMonthEndingDay = 42 - firstWeekday - daysInCurrentMonth;
    const days = showDays(
      prevMonthStartingDay,
      daysInMonths[prevMonth],
      daysInCurrentMonth,
      nextMonthEndingDay,
      this.props.monthTasks
    );
    const calendarView = [...showWeekdays(), ...days];

    return calendarView;
  };

  increaseYear = () => {
    this.setState({
      currentYear: this.state.currentYear + 1
    });
  };

  decreaseYear = () => {
    this.setState({
      currentYear: this.state.currentYear - 1
    });
  };

  increaseMonth = () => {
    this.setState({
      currentMonth:
        months[months.indexOf(this.state.currentMonth) + 1] || months[0]
    });
  };

  decreaseMonth = () => {
    this.setState({
      currentMonth:
        months[months.indexOf(this.state.currentMonth) - 1] || months[11]
    });
  };

  handleIncreaseDate = dateType => {
    if (dateType === "year" && this.state.currentYear !== this.state.maxYear) {
      this.props.getMonthTasks(
        `${this.state.currentYear + 1},${months.indexOf(
          this.state.currentMonth
        )}`
      );
      this.increaseYear();
    }
    if (dateType === "month") {
      /* do not increase month past maxMonth if this is the maxYear */
      if (
        this.state.currentMonth === this.state.maxMonth &&
        this.state.currentYear === this.state.maxYear
      ) {
        return;
      }

      /* increase year when moving from December to January */
      if (
        this.state.currentYear !== this.state.maxYear &&
        this.state.currentMonth === "December"
      ) {
        this.props.getMonthTasks(
          `${this.state.currentYear + 1},${months.indexOf(
            this.state.currentMonth
          ) + 1 || months[0]}`
        );
        this.increaseMonth();
        this.increaseYear();
      }

      /* handle normal month increase */
      this.props.getMonthTasks(
        `${this.state.currentYear},${months.indexOf(this.state.currentMonth) +
          1 || months[0]}`
      );
      this.increaseMonth();
    }
  };

  handleDecreaseDate = dateType => {
    if (dateType === "year" && this.state.currentYear !== this.state.minYear) {
      this.props.getMonthTasks(
        `${this.state.currentYear - 1},${months.indexOf(
          this.state.currentMonth
        )}`
      );
      this.decreaseYear();
    }
    if (dateType === "month") {
      if (
        this.state.currentYear === this.state.minYear &&
        this.state.currentMonth !== "January"
      ) {
        /* do not decrease month past January if this is the minimum Year */
        this.props.getMonthTasks(
          `${this.state.currentYear},${months.indexOf(this.state.currentMonth) -
            1 || months[11]}`
        );
        this.decreaseMonth();
      } else if (
        this.state.currentYear !== this.state.minYear &&
        this.state.currentMonth === "January"
      ) {
        /* if current Year is not the minimum Year and we decrease Month past January, we should switch to December of the previous Year*/
        this.props.getMonthTasks(
          `${this.state.currentYear - 1},${months.indexOf(
            this.state.currentMonth
          ) - 1 || months[11]}`
        );
        this.decreaseMonth();
        this.decreaseYear();
      } else if (this.state.currentYear !== this.state.minYear) {
        /* handle all normal Month decrease actions */
        this.props.getMonthTasks(
          `${this.state.currentYear},${months.indexOf(this.state.currentMonth) -
            1 || months[11]}`
        );
        this.decreaseMonth();
      }
    }
  };

  handleDateSelect = e => {
    const date = +e.target.getAttribute("data-date");

    if (this.props.monthTasks.includes(date)) {
      this.props.getDateTasks(
        `${this.state.currentYear},${months.indexOf(
          this.state.currentMonth
        )},${date}`
      );
    }
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

    return (
      <Typography component="div" className={classes.calendar}>
        <DateSelector
          dateType={"year"}
          dateValue={currentYear}
          isMax={currentYear === maxYear}
          isMin={currentYear === minYear}
          handleIncreaseDate={this.handleIncreaseDate}
          handleDecreaseDate={this.handleDecreaseDate}
        />
        <DateSelector
          dateType={"month"}
          dateValue={currentMonth}
          isMax={currentMonth === maxMonth && currentYear === maxYear}
          isMin={currentMonth === minMonth && currentYear === minYear}
          handleIncreaseDate={this.handleIncreaseDate}
          handleDecreaseDate={this.handleDecreaseDate}
        />
        <section className="month-dates" onClick={this.handleDateSelect}>
          {this.displayDaysInMonth(currentMonth, months, daysInMonths)}
        </section>
        <DateSelectorTest dateType={"year"} />
        <DateSelectorTest dateType={"month"} />
      </Typography>
    );
  }
}

Calendar.propTypes = {
  classes: PropTypes.object.isRequired,
  monthTasks: PropTypes.arrayOf(PropTypes.number),
  getMonthTasks: PropTypes.func.isRequired,
  getDateTasks: PropTypes.func.isRequired,
  getCurrentDate: PropTypes.func.isRequired
};

const mapStateToProps = ({ monthTasks }) => ({ monthTasks });

export default withStyles(CalendarStyles)(
  connect(mapStateToProps, actions)(Calendar)
);
