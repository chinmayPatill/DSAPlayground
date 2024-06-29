// Problem Description
// You are given an array A of integers of size N.
// Your task is to find the equilibrium index of the given array
// The equilibrium index of an array is an index such that
// the sum of elements at lower indexes is equal to the sum of elements at higher indexes.
// If there are no elements that are at lower indexes or at higher indexes,
// then the corresponding sum of elements is considered as 0.
// Note:
// Array indexing starts from 0.
// If there is no equilibrium index then return -1.
// If there are more than one equilibrium indexes then return the minimum index.

export function equilibriumIndexOfArray(A) {
  function calPf(A) {
    let pf = [A[0]];
    for (let i = 1; i < A.length; i++) {
      pf[i] = pf[i - 1] + A[i];
    }
    return pf;
  }
  const pf = calPf(A);
  for (let i = 0; i < A.length; i++) {
    let left = i === 0 ? 0 : pf[i - 1];
    let right = i === A.length - 1 ? 0 : pf[pf.length - 1] - pf[i];

    if (left === right) return i;
  }

  return -1;
}
