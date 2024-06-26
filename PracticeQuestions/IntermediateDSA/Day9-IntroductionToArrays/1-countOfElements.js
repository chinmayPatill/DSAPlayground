// Given an array A of N integers.
// Count the number of elements that have at least 1 elements greater than itself.

export function countOfElements(A) {
  let max = A[0];
  let freq = 0;

  for (let i = 0; i < A.length; i++) {
    if (max === A[i]) {
      freq++;
    } else if (A[i] > max) {
      max = A[i];
      freq = 1;
    }
  }

  return A.length - freq;
}
