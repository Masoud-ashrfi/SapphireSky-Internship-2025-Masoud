/////////////////////////Easy
//Question1:Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
// console.log(celsiusToFahrenheit(30));

//Question2:Find the Maximum of Three Numbers
function maxOfThree(a, b, c) {
  let max = a;

  if (b > max) {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  return max;
}
// console.log(maxOfThree(5, 8, 8));

//Question3:Check Even or Odd
function isEven(number) {
  return number % 2 === 0 ? true : false;
}
// console.log(isEven(0));

//Question4:Count Vowels in a String
function countVowels(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let numOfVowels = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.has(str[i].toLowerCase())) numOfVowels++;
  }

  return numOfVowels;
}
// console.log(countVowels("hEllo"));

//Question5:Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

// console.log(reverseString("hello"));

/////////////////////////Medium
//Question6:Check if a Number is Prime
function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  for (let i = 3; i < n; i += 2) {
    if (n % i === 0) return false;
  }

  return true;
}
// console.log(isPrime(27));

//Question7:Calculate Factorial Using Recursion
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
// console.log(factorial(5));

//Question8:Find the GCD of Two Numbers
function gcd(a, b) {
  if (b === 0) return a;

  return gcd(b, a % b);
}
// console.log(gcd(48, 18));

//Question9:Find the nth Fibonacci Number
function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log(fibonacci(5));

//Question10:Check if a String is a Palindrome
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
// console.log(isPalindrome("madag"));

/////////////////////////Hard
//Question11:Generate Pascal’s Triangle
function pascalTriangle(rows) {
  let triangle = [];

  for (let i = 0; i < rows; i++) {
    let row = [1];

    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    if (i > 0) row.push(1);

    triangle.push(row);
  }

  for (let i = 0; i < rows; i++) {
    console.log(" ".repeat(rows - i) + triangle[i].join(" "));
  }
}

pascalTriangle(5);

//Question12:Binary Search Algorithm
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}
// console.log(binarySearch([2, 4, 7, 9], 2));

//Question13:Convert Decimal to Binary
function decimalToBinary(n) {
  let binary = [];

  let i = n;
  while (i > 0) {
    binary.push(i % 2);
    i = Math.floor(i / 2);
  }

  return binary.reverse().join("");
}
// console.log(decimalToBinary(15));

//Question14:Sorting an Array Using Bubble Sort
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
// console.log(bubbleSort([2, 1, 9, 4, 3, 8, 7]));

//Question15:Find Unique Elements in an Array
function findUnique(arr) {
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    let isUnique = true;

    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        isUnique = false;
        break;
      }
    }

    if (isUnique) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}
// console.log(findUnique([1, 2, 2, 3, 4, 4, 5]));
