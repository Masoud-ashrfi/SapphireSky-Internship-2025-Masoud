/////////////////////////Easy
//Question1: Print Prime Numbers from 1 to 100
function primeNumbers(number) {
  for (let i = 2; i <= number; i++) {
    let isPrime = true;

    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(i);
    }
  }
}
// primeNumbers(100);

//Question2: Pascal’s Triangle
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
// pascalTriangle(5);

//Question3: Matrix Multiplication
function multiplyMatrices(A, B) {
  if (A[0].length !== B.length) {
    throw new Error(
      "Matrix multiplication not possible: Columns of A must match rows of B."
    );
  }

  let result = new Array(A.length)
    .fill(0)
    .map(() => new Array(B[0].length).fill(0));

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B[0].length; j++) {
      for (let k = 0; k < B.length; k++) {
        result[i][j] += A[i][k] * B[k][j];
      }
    }
  }

  return result;
}
const A = [
  [1, 2, 3],
  [4, 5, 6],
];

const B = [
  [7, 8],
  [9, 10],
  [11, 12],
];
console.log(multiplyMatrices(A, B));
