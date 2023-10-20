/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

const enum Day {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7,
}

function isWeekend(day: Day): boolean {
  if (day <= 5) {
    return false;
  }
  return true;
}

let weekend = isWeekend(Day.Monday);

if (!weekend) {
  console.log("This is work day");
} else {
  console.log("This is weekend");
}

export {};
