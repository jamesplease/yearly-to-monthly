// Returns whether or not `year` is a leap year
function isLeapYear(year) {
  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

// Hey. Psst. Make sure the month is 0-indexed. i.e.; January is 0.
function getDaysInMonth(zeroIndexedMonth, year) {
  return new Date(year, zeroIndexedMonth + 1, 0).getDate();
}

// Leap years have 366 days. Regular years have 365.
function getDaysInYear(year) {
  return isLeapYear(year) ? 366 : 365;
}

function getWeekDaysInMonth(zeroIndexedMonth, year) {
  const firstDay = new Date(year, zeroIndexedMonth, 1);
  const firstDaySubsequentMonth = new Date(year, zeroIndexedMonth + 1, 1);
  return bizniz.weekDaysBetween(firstDay, firstDaySubsequentMonth);
}

function getWeekDaysInYear(year) {
  const firstDay = new Date(year, 0, 1);
  const firstDaySubsequentYear = new Date(year + 1, 0, 1);
  return bizniz.weekDaysBetween(firstDay, firstDaySubsequentYear);
}

// month: a 0-indexed month. i.e.; January is 0
// year: pretty self-explanatory, I think. The year.
// yearlyValue: the yearly value being converted to its
//   monthly equivalent
// weekDaysOnly: a Boolean representing whether to ignore
//   weekends or not. Useful for, say, paychecks.
function yearlyToMonthly({month, year, yearlyValue, weekDaysOnly}) {
  let daysInMonth, daysInYear;
  if (!weekDaysOnly) {
    daysInMonth = getDaysInMonth(month, year);
    daysInYear = getDaysInYear(year);
  } else {
    daysInMonth = getWeekDaysInMonth(month, year);
    daysInYear = getWeekDaysInYear(year);
  }
  return yearlyValue * (daysInMonth / daysInYear);
}

export default yearlyToMonthly;
