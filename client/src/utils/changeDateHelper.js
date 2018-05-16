import { months } from "./dateData";

const changeDateHelper = ({
  operation,
  dateType,
  displayedDate,
  minDate,
  currentDate
}) => {
  let newYear = displayedDate.year;
  let newMonth = displayedDate.month;

  if (operation === "increase" && dateType === "year") {
    newYear = `${+displayedDate.year + 1}`;
  } else if (operation === "decrease" && dateType === "year") {
    newYear = `${+displayedDate.year - 1}`;
    // if year is decreased, month should not be set earlier than min month
    if (
      newYear === minDate.year &&
      months.indexOf(minDate.month) > months.indexOf(displayedDate.month)
    ) {
      newMonth = minDate.month;
    }
  } else if (operation === "increase" && dateType === "month") {
    if (
      displayedDate.year !== currentDate.year &&
      displayedDate.month === "December"
    ) {
      newYear = +displayedDate.year + 1 + "";
      newMonth = "January";
    } else {
      newMonth = months[months.indexOf(displayedDate.month) + 1];
    }
  } else if (operation === "decrease" && dateType === "month") {
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
