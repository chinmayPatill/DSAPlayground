// Problem Description
// You are given an integer array A.
// You have to find the second largest element/value in the array or report that no such element exists.

export function secondLargest(A) {
  let largest = -Infinity;
  let second = -Infinity;
  if (A.length < 2) {
    return -1;
  }
  for (i = 0; i < A.length; i++) {
    if (A[i] > largest) {
      second = largest;
      largest = A[i];
    } else if (A[i] != largest && A[i] > second) {
      second = A[i];
    }
  }
  if (second == -Infinity) {
    return -1;
  } else {
    return Number(second);
  }
}
