import { months } from "./dateData";

const changeDateHelper = ({
  operationType,
  dateType,
  displayedDate,
  minDate,
  currentDate
}) => {
  let newYear = displayedDate.year;
  let newMonth = displayedDate.month;

  if (operationType === "increase" && dateType === "year") {
    newYear = `${+displayedDate.year + 1}`;
    // if year is increased, month should not be set later than max month
    if (
      newYear === currentDate.year &&
      months.indexOf(newMonth) > months.indexOf(currentDate.month)
    ) {
      newMonth = currentDate.month;
    }
  } else if (operationType === "decrease" && dateType === "year") {
    newYear = `${+displayedDate.year - 1}`;
    // if year is decreased, month should not be set earlier than min month
    if (
      newYear === minDate.year &&
      months.indexOf(minDate.month) > months.indexOf(displayedDate.month)
    ) {
      newMonth = minDate.month;
    }
  } else if (operationType === "increase" && dateType === "month") {
    if (
      displayedDate.year !== currentDate.year &&
      displayedDate.month === "December"
    ) {
      newYear = +displayedDate.year + 1 + "";
      newMonth = "January";
    } else {
      newMonth = months[months.indexOf(displayedDate.month) + 1];
    }
  } else if (operationType === "decrease" && dateType === "month") {
    if (displayedDate.month === "January") {
      newYear = `${+displayedDate.year - 1}`;
      newMonth = "December";
    } else {
      newMonth = months[months.indexOf(displayedDate.month) - 1];
    }
  }

  return { newYear, newMonth };
};

export default changeDateHelper;
