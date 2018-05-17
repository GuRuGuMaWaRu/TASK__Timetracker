import { weekdays2, months, daysInMonths } from "./dateData";

const findFirstWeekday = (month, year) => {
  const date = new Date(`${month} 1, ${year}`);
  const weekdayUSA = date.getDay();
  const weekdayLocal = weekdayUSA === 0 ? 6 : weekdayUSA - 1;

  return weekdayLocal;
};

const createMonthArray = (datesWithTasks, newYear, newMonth) => {
  const firstWeekday = findFirstWeekday(newMonth, newYear);
  console.log(firstWeekday);
  const weekdays = weekdays2.map(weekday => ({
    value: weekday,
    class: "month-dates--weekdays"
  }));
};

export default createMonthArray;
