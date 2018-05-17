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
  console.log("minDate", minDate);
  console.log("displayedDate", displayedDate);
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

  const handleChangeDate = (operationType, dateType, isDisabled) => {
    if (!isDisabled) {
      changeDate(operationType, dateType);
    }
    return;
  };

  return (
    <div className={classes.selector}>
      <ArrowLeft
        className={isMinimum ? classes.disabled : classes.icon}
        style={{ fontSize: 40 }}
        onClick={() => handleChangeDate("decrease", dateType, isMinimum)}
      />
      <span>{displayedDate[dateType]}</span>
      <ArrowRight
        className={isMaximum ? classes.disabled : classes.icon}
        style={{ fontSize: 40 }}
        onClick={() => handleChangeDate("increase", dateType, isMaximum)}
      />
    </div>
  );
};

DateSelector.propTypes = {
  classes: PropTypes.object.isRequired,
  dateType: PropTypes.string.isRequired,
  currentDate: PropTypes.objectOf(PropTypes.string.isRequired),
  minDate: PropTypes.objectOf(PropTypes.string),
  displayedDate: PropTypes.objectOf(PropTypes.string.isRequired),
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
