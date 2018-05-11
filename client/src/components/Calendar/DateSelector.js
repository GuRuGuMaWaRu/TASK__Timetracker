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
  const isMinimum = displayedDate[dateType] === minDate[dateType];
  const isMaximum = displayedDate[dateType] === currentDate[dateType];

  const handleChangeDate = operationType => {
    if (
      (operationType == "decrease" && !isMinimum) ||
      (operationType == "increase" && !isMaximum)
    ) {
      changeDate(operationType, dateType);
    }
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

const mapStateToProps = ({ calendar }) => ({
  currentDate: calendar.currentDate,
  minDate: calendar.minDate,
  displayedDate: calendar.displayedDate
});

export default connect(mapStateToProps, actions)(
  withStyles(DateSelectorStyles)(DateSelector)
);
