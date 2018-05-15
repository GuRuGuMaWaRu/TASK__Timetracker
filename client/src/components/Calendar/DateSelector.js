import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "material-ui/styles";
import ArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import ArrowRight from "@material-ui/icons/KeyboardArrowRight";

import * as actions from "../../actions";

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
  dateType,
  displayedDate,
  currentDate,
  minDate,
  changeDate
}) => {
  const isMinimum =
    dateType === "year"
      ? displayedDate.year === minDate.year
      : displayedDate.year === minDate.year &&
        displayedDate.month === minDate.month;

  const isMaximum =
    dateType === "year"
      ? displayedDate.year === currentDate.year
      : displayedDate.year === currentDate.year &&
        displayedDate.month === currentDate.month;

  const isMinYear = displayedDate.year === minDate.year;
  const isMaxYear = displayedDate.year === currentDate.year;

  const handleChangeDate = operationType => {
    if (dateType === "year") {
      // change year
      if (
        (operationType === "decrease" && !isMinYear) ||
        (operationType === "increase" && !isMaxYear)
      ) {
        changeDate(operationType, dateType);
      }
    } else if (dateType === "month") {
      // change month
      if (
        (operationType === "decrease" && !(isMinYear && isMinimum)) ||
        (operationType === "increase" && !(isMaximum && isMaximum))
      ) {
        changeDate(operationType, dateType);
      }
    }

    // cannot change
    return;
  };

  return (
    <div className={classes.selector}>
      <ArrowLeft
        className={isMinimum ? classes.disabled : classes.icon}
        style={{ fontSize: 40 }}
        onClick={() => handleChangeDate("decrease")}
      />
      <span>{displayedDate[dateType]}</span>
      <ArrowRight
        className={isMaximum ? classes.disabled : classes.icon}
        style={{ fontSize: 40 }}
        onClick={() => handleChangeDate("increase")}
      />
    </div>
  );
};

DateSelector.propTypes = {
  classes: PropTypes.object.isRequired,
  dateType: PropTypes.string.isRequired,
  currentDate: PropTypes.objectOf(PropTypes.string),
  minDate: PropTypes.objectOf(PropTypes.string),
  displayedDate: PropTypes.objectOf(PropTypes.string),
  changeDate: PropTypes.func.isRequired
};

const mapStateToProps = ({ currentDate, displayedDate, minDate }) => ({
  currentDate,
  displayedDate,
  minDate
});

export default connect(mapStateToProps, actions)(
  withStyles(DateSelectorStyles)(DateSelector)
);
