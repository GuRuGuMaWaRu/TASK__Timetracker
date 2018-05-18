import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";

import DateSelector from "./DateSelector";
import * as actions from "../../actions";
import { months } from "../../utils/dateData";
import "./Calendar.css";

const CalendarStyles = theme => ({
  calendar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "1.5em"
  }
});

export class Calendar extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    displayedDate: PropTypes.objectOf(PropTypes.string).isRequired,
    currentDate: PropTypes.objectOf(PropTypes.string).isRequired,
    minDate: PropTypes.objectOf(PropTypes.string).isRequired,
    displayedMonth: PropTypes.array.isRequired,
    getDateTasks: PropTypes.func.isRequired,
    getDate: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getDate();
  }

  constructMonth = () => {
    return this.props.displayedMonth.map(cell => {
      return (
        <div
          key={`${cell.className}-${cell.value}`}
          className={`${cell.className} ${cell.withTasks ? "with-tasks" : ""}`}
        >
          {cell.value}
        </div>
      );
    });
  };

  handleDateSelect = e => {
    const element = e.target;

    if (element.classList.contains("with-tasks")) {
      this.props.getDateTasks(
        `${this.props.displayedDate.year},${months.indexOf(
          this.props.displayedDate.month
        )},${element.textContent}`
      );
    }
  };

  render() {
    const { classes, displayedDate, currentDate, minDate } = this.props;

    return (
      <Typography component="div" className={classes.calendar}>
        <DateSelector
          dateType="year"
          displayedDate={displayedDate}
          currentDate={currentDate}
          minDate={minDate}
        />
        <DateSelector
          dateType="month"
          displayedDate={displayedDate}
          currentDate={currentDate}
          minDate={minDate}
        />
        <section className="month-dates" onClick={this.handleDateSelect}>
          {this.constructMonth()}
        </section>
      </Typography>
    );
  }
}

const mapStateToProps = ({
  displayedDate,
  currentDate,
  minDate,
  displayedMonth
}) => ({
  displayedDate,
  currentDate,
  minDate,
  displayedMonth
});

export default withStyles(CalendarStyles)(
  connect(mapStateToProps, actions)(Calendar)
);
