// Problem Description
// Given an array A of size N.
// You need to find the sum of Maximum and Minimum element in the given array.

export function minMaxOfArray(A) {
  let max = A[0];
  let min = A[0];

  for (let i = 0; i < A.length; i++) {
    if (A[i] > max) {
      max = A[i];
    }
    if (A[i] < min) {
      min = A[i];
    }
  }

  return parseInt(min + max);
}
