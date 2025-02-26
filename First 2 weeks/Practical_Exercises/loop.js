/////////////////////////Easy
//Question1:Print Numbers from 1 to 100
function print1To100() {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}
// print1To100();

//Question2:Sum of First N Natural Numbers
function sumOfN(n) {
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum += i;
  }
  return sum;
}
// console.log(sumOfN(5));

//Question3:Multiplication Table
function multiplication() {
  console.log("Enter your number");
  process.stdin.on("data", (input) => {
    let result = 1;
    for (let i = 1; i <= 10; i++) {
      result = input * i;
      process.stdout.write(result.toString().padStart(4, " "));
    }

    process.exit();
  });
}

//Question4:Reverse a Number
function reverseNumber(number) {
  let numToString = number.toString();
  let result = "";

  for (let i = numToString.length - 1; i >= 0; i--) {
    result += numToString[i];
  }

  return result;
}
// console.log(reverseNumber(34529));

//Question5:Count Digits in a Number
function countDigits(num) {
  let count = 0;
  while (num !== 0) {
    num = Math.floor(num / 10);
    console.log(num);
    count++;
  }

  return count;
}
console.log(countDigits(1234));

/////////////////////////Medium
//Question6:Check for Prime Number
function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
// console.log(isPrime(13));

//Question7:Factorial of a Number
function factorial(number) {
  if (number === 0 || number === 1) return 1;
  for (let i = number - 1; i > 0; i--) {
    number *= i;
  }
  return number;
}
// console.log(factorial(5));

//Question8:Find Largest and Smallest in a List
function findLargestSmallest(arr) {
  if (arr.length < 2) {
    console.log("Invalid array");
    return;
  }

  let smallest = arr[0];
  let Largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > Largest) {
      Largest = arr[i];
    }

    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return `The smallest number in the array is ${smallest} and the largest number is ${Largest}`;
}
// console.log(findLargestSmallest([9, 2, 3, 4, 5, 6, 7]));

//Question9:Fibonacci Sequence
function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;

  let a = 0,
    b = 1,
    next;

  console.log(a);
  console.log(b);

  for (let i = 2; i <= n; i++) {
    next = a + b;
    a = b;
    b = next;
    console.log(b);
  }

  // return null;
}

// fibonacci(6);

//Question10:Palindrome Checker
function isNumPalidrome(number) {
  const numToString = number.toString();

  let result = "";
  for (let i = numToString.length - 1; i >= 0; i--) {
    result += numToString[i];
  }

  return result === numToString;
}
// console.log(isNumPalidrome(123));

/////////////////////////Hard
//Question11: Armstrong Number
function isArmstrongNum(num) {
  const numToString = num.toString();
  let armstrong = 0;

  for (let i = 0; i < numToString.length; i++) {
    armstrong += Number(numToString[i]) ** numToString.length;
  }

  return armstrong === num;
}
// console.log(isArmstrongNum(143));

//Question12: Collatz Sequence (Hailstone Numbers)
function collatzSequence(n) {
  let steps = 0;

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }
    steps++;
  }

  return steps;
}

// console.log(collatzSequence(6));

//Question13: Find GCD (Greatest Common Divisor)
function greatestCommonDivisor(num1, num2) {
  let greatestCommonDivisor = 1;

  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      greatestCommonDivisor = i;
    }
  }

  return greatestCommonDivisor;
}

// console.log(greatestCommonDivisor(12, 18));

//Question14: Pattern Printing - Pyramid
function pyramid(n) {
  for (let i = 1, j = n; i < n, j > 0; i += 2, j--) {
    console.log(" ".repeat(j) + "*".repeat(i));
  }
}
// pyramid(5);

//Question15: Number Guessing Game
function guessNumGame() {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  console.log("Guess the number (between 1 and 100):");

  process.stdin.on("data", (input) => {
    let guess = Number(input.toString().trim());

    if (isNaN(guess)) {
      console.log("Please enter a valid number.");
      return;
    }

    if (guess === randomNum) {
      console.log("You guessed correctly 🎉");
      process.exit();
    } else if (guess > randomNum) {
      console.log("Too high, try again!");
    } else {
      console.log("Too low, try again!");
    }
  });
}

// guessNumGame();
