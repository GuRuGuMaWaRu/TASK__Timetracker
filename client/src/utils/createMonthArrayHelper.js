import { weekdays, months, daysInMonths } from "./dateData";

const findFirstWeekday = (month, year) => {
  const date = new Date(`${month} 1, ${year}`);
  const weekdayUSA = date.getDay();
  const weekdayLocal = weekdayUSA === 0 ? 6 : weekdayUSA - 1;

  return weekdayLocal;
};

const isLeapYear = year => {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

const getDaysInCurrentMonth = (month, year) => {
  if (month === "February" && isLeapYear(year)) {
    return daysInMonths[month] + 1;
  }

  return daysInMonths[month];
};

const createMonthArrayHelper = (datesWithTasks, newYear, newMonth) => {
  const firstWeekday = findFirstWeekday(newMonth, newYear);
  const prevMonth = months[months.indexOf(newMonth) - 1] || months[11];
  const prevMonthStartingDay = daysInMonths[prevMonth] - firstWeekday + 1;
  const daysInCurrentMonth = getDaysInCurrentMonth(newMonth, newYear);
  const nextMonthEndingDay = 42 - firstWeekday - daysInCurrentMonth;

  const weekdayArray = weekdays.map(weekday => ({
    value: weekday,
    className: "month-dates--weekdays",
    withTasks: false
  }));

  const prevMonthArray = [
    ...Array(daysInMonths[prevMonth] - prevMonthStartingDay + 1)
  ].map((day, index) => ({
    value: prevMonthStartingDay + index,
    className: "month-dates--prev",
    withTasks: false
  }));

  const currMonthArray = [...Array(daysInCurrentMonth)].map((day, index) => ({
    value: index + 1,
    className: "month-dates--curr",
    withTasks: datesWithTasks[index + 1] ? true : false,
    tasks: datesWithTasks[index + 1]
  }));

  const nextMonthArray = [...Array(nextMonthEndingDay)].map((day, index) => ({
    value: index + 1,
    className: "month-dates--next",
    withTasks: false
  }));

  return [
    ...weekdayArray,
    ...prevMonthArray,
    ...currMonthArray,
    ...nextMonthArray
  ];
};

export default createMonthArrayHelper;
