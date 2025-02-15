//Question 1
function checkEvenOdd(n) {
  n % 2 == 0 ? console.log(`${n} is Even`) : console.log(`${n} is Odd`);
}
// checkEvenOdd(3);

//Question 2
function gradeCalculator(score) {
  if (score >= 90 && score <= 100) console.log("A");
  if (score >= 80 && score <= 89) console.log("B");
  if (score >= 70 && score <= 79) console.log("C");
  if (score >= 60 && score <= 69) console.log("D");
  if (score < 60) console.log("F");
}
// gradeCalculator(100);

//Question 3
function minTwoNumbers(num1, num2) {
  num1 < num2 ? console.log(num1) : console.log(num2);
}
minTwoNumbers(6, 5);

//Question 4
function leapYearChecker(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a Leap year`);
    return;
  }

  console.log(`${year} is NOT a Leap year`);
}
leapYearChecker(1900);

//Question 5
