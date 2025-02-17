//////////////Easy
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
// minTwoNumbers(6, 5);

//Question 4
function leapYearChecker(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`${year} is a Leap year`);
    return;
  }

  console.log(`${year} is NOT a Leap year`);
}
// leapYearChecker(1900);

////////////////Medium
//Question 5
function triangleValidity(side1, side2, side3) {
  if (side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2) {
    console.log("It is a valid triangle");
  } else {
    console.log("It is an invalid triangle");
  }
}
// triangleValidity(12, 24, 25);

//Question 6
function speedingTicketCalculator(speed) {
  const speedLimit = "60km/h";
  if (parseInt(speed) > 100) {
    console.log("You got Double fine");
  } else if (parseInt(speed) > parseInt(speedLimit)) {
    console.log("You got a fine");
  }
}
// speedingTicketCalculator("61km/h");

//Question 7
function atmWithdrawal(amount) {
  const balance = 10000;

  if (balance < amount) {
    console.log("Insufficient Funds");
    return;
  }
  amount % 10 === 0
    ? console.log("You are allowed to withdrawal")
    : console.log("You are NOT allowed to withdrawal");
}
// atmWithdrawal(10001);

////////////////Hard
//Question 8
function bmiCalculator(weight, height) {
  const weightNum = parseFloat(weight);
  const heightNum = parseFloat(height);

  const calculateBMI = weightNum / (heightNum * heightNum);

  if (calculateBMI < 18.5) {
    console.log("You are Underweight");
  } else if (calculateBMI < 25) {
    console.log("You are Normal weight");
  } else if (calculateBMI < 30) {
    console.log("You are Overweight");
  } else {
    console.log("You are Obese");
  }
}
// bmiCalculator("80kg", "1.8m");

//Question 9
function electricityBillCalculator(units) {
  let bill = 0;

  if (units <= 100) {
    bill = units * 0.5;
  } else if (units <= 200) {
    bill = 100 * 0.5 + (units - 100) * 0.75;
  } else if (units <= 500) {
    bill = 100 * 0.5 + 100 * 0.75 + (units - 200) * 1.2;
  } else {
    bill = 100 * 0.5 + 100 * 0.75 + 300 * 1.2 + (units - 500) * 1.5;
  }

  console.log(`You consumed ${bill.toFixed(2)}$`);
}

// electricityBillCalculator(99);

//Question 10
function passwordStrengthChecker(password) {
  const hasEnoughLength = password.length >= 8;
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasDigits = /\d/.test(password);
  hasEnoughLength && hasLowerCase && hasUpperCase && hasDigits
    ? console.log(`${password} is a Strong password`)
    : console.log(`${password} is a Weak password`);
}
// passwordStrengthChecker("mdadMda");

////////////////JavaScript Fundamentals
//Question 4
function checkPosNegZero(number) {
  number === 0 && console.log(`${number} is Zero`);
  number > 0 && console.log(`${number} is Positive`);
  number < 0 && console.log(`${number} is Negative`);
}
// checkPosNegZero(-1);

//Question 6
function factorial(number) {
  if (number === 0 || number === 1) return 1;
  let factorial = number;
  for (let i = number - 1; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}
console.log(factorial(0));

//Question 9
function findSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
console.log(findSum([2, 3, 4, 5]));
