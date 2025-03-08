/////////////////////////Easy
//Question1: Write a function to find the largest element in an array.
function findLargest(arr) {
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}
// console.log(findLargest([9, 2, 12, 4, 5, 6, 7]));

//Question2: Write a function to find the sum of all elements in an array.
function sumOfAllElements(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}
// console.log(sumOfAllElements([2, 1, 4, 5]));

//Question3: How do you check if an array contains a specific element?
//Answer3: There are a lot of ways to ckeck if an array contains a pecific element or not. I will cover them in the bellow.
// 1. Usnig includes() (Best for simple checks)
const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // true
console.log(arr.includes(6)); // false
// 2. Usnig indexOf()
console.log(arr.indexOf(3) !== -1); // true
console.log(arr.indexOf(6) !== -1); // false
// 3. Using some() (For complex conditions)
const arr2 = [{ id: 1 }, { id: 2 }, { id: 3 }];
console.log(arr2.some((item) => item.id === 2)); // true
console.log(arr2.some((item) => item.id === 5)); // false
// 4. Using find() (If you need the element itself)
const arr3 = [{ id: 1 }, { id: 2 }, { id: 3 }];
console.log(arr3.find((item) => item.id === 2)); // { id: 2 }
console.log(arr3.find((item) => item.id === 5)); // undefined

//Question4: Write a function to count the occurrences of a specific element in an array.
function countOccurrences(arr, element) {
  let occurrences = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      occurrences += 1;
    }
  }

  return occurrences;
}
// console.log(countOccurrences([9, 2, 12, 4, 5, 6, 7, 2], 14));

//Question5: Implement a function to find the smallest number in an array.
function findSmallest(arr) {
  let smallest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }

  return smallest;
}
// console.log(findSmallest([9, 2, 12, 4, 5, 6, 7]));

/////////////////////////Medium
//Question6: Write a function to reverse an array without using the built-in reverse() method.
function reverseArray(arr) {
  let reverse = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }

  return reverse;
}
// console.log(reverseArray([2, 3, 4, 5, 6, 7]));

//Question7: How do you merge two sorted arrays into one sorted array?
function mergeSortedArrays(array1, array2) {
  const mergedArray = [];
  if (array1.length === 0) {
    return array2;
  }
  if (array2.length === 0) {
    return array1;
  }

  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergedArray;
}
// console.log(mergeSortedArrays([0, 3, 4], [5, 6, 7, 30, 31, 32]));

//Question8: Implement a function that rotates an array k times to the right.
function rotateArrayToTheRight(arr, k) {
  const rotateArray = [...arr.slice(-k)];
  rotateArray.push(...arr.slice(0, arr.length - k));

  return rotateArray;
}
// console.log(rotateArrayToTheRight([1, 2, 3, 4, 5], 2));

//Question9: Write a function to find the second largest number in an array.
function secondLargestNumber(arr) {
  if (arr.length < 2) return null;

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}
// console.log(secondLargestNumber([10, 5, 8, 20, 12]));

//Question10: Implement a function that finds the intersection of two arrays.
function findIntersection(firstArr, secondArr) {
  let intersectionArr = [];
  let i = 0;
  let j = 0;

  while (i < firstArr.length && j < secondArr.length) {
    if (firstArr[i] === secondArr[j]) {
      intersectionArr.push(firstArr[i]);
      i++;
      j++;
    } else if (firstArr[i] < secondArr[j]) {
      i++;
    } else {
      j++;
    }
  }
  intersectionArr.length == 0 && console.log("There is no intersection");
  return intersectionArr;
}
// console.log(findIntersection([1, 3, 5], [3, 5, 7]));

/////////////////////////Hard
//Question11: How do you remove duplicates from an array efficiently?
function removeDuplicates(arr) {
  let removeDup = [];
  for (let i = 0; i < arr.length; i++) {
    if (removeDup.indexOf(arr[i]) === -1) {
      removeDup.push(arr[i]);
    }
  }
  return removeDup;
}
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

//Question12: Write a function to find the missing number in an array of 1 to N.
function findMissingNum(arr, num) {
  for (let i = 1; i <= num; i++) {
    if (!arr.includes(i)) {
      return i;
    }
  }
  return -1;
}
// console.log(findMissingNum([3, 7, 1, 2, 4, 6], 7));
//Version2: More Efficient Approach (O(n) Time, O(1) Space) (Using the sum formula)
function findMissingNum1(arr, num) {
  const expectedSum = (num * (num + 1)) / 2; // Sum of numbers from 1 to N
  const actualSum = arr.reduce((sum, val) => sum + val, 0); // Sum of given numbers
  return expectedSum - actualSum; // Missing number
}
// console.log(findMissingNum1([1, 2, 4, 5], 5));

//Question13: How do you check if two arrays are equal?
//Answer13: To check if two arrays are equal, you need to ensure:
// 1. They have the same length.
// 2. They contain the same elements in the same order.
// There are a lot fo ways to check if two arrays are equal or not, that We will cover them below.
// Best Approach: Convert to String
function areArraysEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}
console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
// Approach: Using a Loop (More Flexible)
function areArraysEqual1(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}
console.log(areArraysEqual1([1, 2, 3], [1, 2, 3]));
// Handling Unordered Arrays (Sorting First)
function areArraysEqual2(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.sort().toString() === arr2.sort().toString()
  );
}
console.log(areArraysEqual2([1, 2, 3], [3, 2, 1])); // true
console.log(areArraysEqual2([1, 2, 3], [1, 2, 4])); // false

//Question14: Implement a function to find the subarray with the maximum sum (Kadane’s Algorithm).
function maxSubArray(arr) {
  let maxSub = arr[0]; // Initialize maxSub with the first element
  let curSum = 0; // Initialize current sum to 0

  // Iterate over each element in the array
  for (let n of arr) {
    // If current sum is negative, reset it to 0 (this is the key difference)
    if (curSum < 0) {
      curSum = 0;
    }

    // Add the current element to the current sum
    curSum += n;

    // Update maxSub to the largest sum found so far
    maxSub = Math.max(maxSub, curSum);
  }
  return maxSub; // Return the largest sum found
}

// console.log(maxSubArray([3, -2, 5, -1]));

//Question15: Write a function to rearrange an array such that even numbers appear before odd numbers.
function rearrangeArray(arr) {
  let evenNum = [];
  let oddNum = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNum.push(arr[i]);
    } else {
      oddNum.push(arr[i]);
    }
  }

  const result = evenNum.concat(oddNum);

  return result;
}
console.log(rearrangeArray([3, 2, 4, 7, 6, 1]));
