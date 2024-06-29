// Problem Description
// Given an array A and an integer B, find the number of occurrences of B in A.

export function linearSearchMultipleOccurences(A, B) {
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] == B) count++;
  }
  return count;
}
