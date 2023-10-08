/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: Day): boolean => {
  if (day === Day.Saturday || day === Day.Sunday) {
    console.log("weekend");
    return true;
  } else {
    console.log("workday");
    return false;
  }
};

// isWeekend(Day.Sunday); // weekend
