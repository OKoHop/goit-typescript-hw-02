/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

const enum Day {
  num = 2,
}

function isWeekend(day: number): boolean {
  if (day >= 1 && day <= 5) {
    return true;
  } else {
    return false;
  }
}

let data = isWeekend(Day.num);

if (data) {
  console.log("Working day!");
} else {
  console.log("This is weelend!");
}

export {};
