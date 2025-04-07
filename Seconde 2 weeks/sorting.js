/////////////////////////Easy
//Question1: Implement the Bubble Sort algorithm.
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
// console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]

//Question2: How does Selection Sort work? Implement it.
// 1. Start with the first element as the minimum. 2. Compare it with the rest of the array to find the smallest element. 3. Swap the smallest element with the first element. 4. Move to the next position and repeat the process for the remaining elements. 5. Continue until the entire array is sorted.
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
// console.log(selectionSort([64, 25, 12, 22, 11])); // Output: [11, 12, 22, 25, 64]

//Question3: Implement the Insertion Sort algorithm.
//1. Start with the second element (index 1), because a single element (index 0) is already "sorted".
//2. Compare the current element with the elements before it.
//3. Shift larger elements to the right.
//4. Insert the current element into its correct position.
//5. Repeat for all elements in the array.
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let temp = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = temp;
  }
  return arr;
}
// console.log(insertionSort([64, 25, 12, 22, 11])); // Output: [11, 12, 22, 25, 64]

//Question4: Compare the time complexities of different sorting algorithms.
// 1. Selection Sort
//    - Best Case: O(n^2)
//    - Average Case: O(n^2)
//    - Worst Case: O(n^2)
//    - Space Complexity: O(1)

// 2. Bubble Sort
//    - Best Case: O(n) (already sorted)
//    - Average Case: O(n^2)
//    - Worst Case: O(n^2)
//    - Space Complexity: O(1)

// 3. Insertion Sort
//    - Best Case: O(n)
//    - Average Case: O(n^2)
//    - Worst Case: O(n^2)
//    - Space Complexity: O(1)

//Question5: Write a function to sort an array of numbers in descending order.
function sortArr(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
      }
    }
  }
  return arr;
}
// console.log(sortArr([5, 3, 8, 4, 2])); // Output: [8, 5, 4, 3, 2]

/////////////////////////Medium
//Question6: Implement Merge Sort and explain its time complexity.
//  The time complexity of Merge Sort is O(n log n) in all cases — best, average, and worst. This is because the algorithm works by dividing the array in half at each recursive step, which takes log n levels of splitting. At each level, it processes and merges all n elements, which takes O(n) time. So, overall, the time it takes is the number of levels (log n) multiplied by the work done at each level (n), which gives O(n log n). This makes Merge Sort one of the most efficient general-purpose sorting algorithms.
function mergeSort(array) {
  // Base case: if array has 1 or 0 items, it's already sorted
  if (array.length <= 1) return array;

  // Step 1: Split into two halves
  const middle = Math.floor(array.length / 2);
  const leftHalf = array.slice(0, middle);
  const rightHalf = array.slice(middle);

  // Step 2: Sort both halves
  const sortedLeft = mergeSort(leftHalf);
  const sortedRight = mergeSort(rightHalf);

  // Step 3: Merge them back in sorted order
  return merge(sortedLeft, sortedRight);
}

// This function merges two sorted arrays into one sorted array
function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;

  // Compare elements from both arrays
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Add any remaining elements from both sides
  return result.concat(left.slice(i)).concat(right.slice(j));
}
const arr = [6, 2, 9, 1];
// console.log(mergeSort(arr)); // Output: [1, 2, 6, 9]

//Question7: Implement Quick Sort and explain how pivot selection affects performance.
// How Pivot Affects Performance
// The choice of pivot is very important in Quick Sort:
// ✅ Best Case (Balanced Split):
// The pivot divides the array in half every time.
// Time complexity: O(n log n)
// Example: [6, 2, 9, 1] → pivot 2 splits into [1] and [6, 9] — nice and balanced!

// ❌ Worst Case (Unbalanced Split):
// If the pivot is always the smallest or largest value:
// All elements go into one side (left or right)
// Time complexity: O(n²)
// Example: sorting [1, 2, 3, 4, 5] with pivot as last element (5, then 4, etc.)
// This behaves like Bubble Sort 😬

// 📌 Common Pivot Strategies:
// Pivot Strategy	             Description	                            Performance
// Last element            Easy to implement 	                      Risky on sorted data
// First element	     Same as last — can be bad on sorted arrays	        Risky
// Middle element	       Safer, more balanced	                            Better
// Random element	      Best average-case performance	                   Recommended
// Median-of-three	     Take median of first, middle, last               	Very good
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1]; // pick last element as pivot
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

//Question8: Write a function to perform Counting Sort.

//Question9: How can you sort an array of 0s, 1s, and 2s without extra space?

//Question10: Implement a function to find the Kth largest element in an array using sorting.

/////////////////////////Hard
//Question11: Implement Heap Sort and explain its working.

//Question12: Write a function to sort an array using Radix Sort.

//Question13: How do you sort an array of strings based on their lengths?

//Question14: Implement Bucket Sort and explain its applications.

//Question15: Write a function to find the smallest missing positive integer using sorting.
