// Problem Description
//  You are given an integer array A of length N.
//  You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
//  For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
//  More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.

export function rangeSumQueryII(A, B) {
  function findSum(A, l, r) {
    let sum = 0;
    for (let i = l; i <= r; i++) {
      sum = sum + Number(A[i]);
    }

    return sum;
  }
  let aa = [];
  for (let i = 0; i < B.length; i++) {
    let l = B[i][0];
    let r = B[i][1];
    aa.push(findSum(A, l, r));
  }
  return aa;
}
