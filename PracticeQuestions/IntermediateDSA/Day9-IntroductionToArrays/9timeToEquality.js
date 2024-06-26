// Problem Description
// Given an integer array A of size N. In one second, you can increase the value of one element by 1.

// Find the minimum time in seconds to make all elements of the array equal.

export function timeToEquality(A) {
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] > max) {
      max = A[i];
    }
  }

  for (let i = 0; i < A.length; i++) {
    sum = sum + (max - A[i]);
  }

  return sum;
}
