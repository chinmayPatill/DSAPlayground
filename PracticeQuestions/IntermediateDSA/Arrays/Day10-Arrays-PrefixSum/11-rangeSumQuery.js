// Problem Description
// You are given an integer array A of length N.
// You are also given a 2D integer array B with dimensions M x 2, where each row denotes a [L, R] query.
// For each query, you have to find the sum of all elements from L to R indices in A (0 - indexed).
// More formally, find A[L] + A[L + 1] + A[L + 2] +... + A[R - 1] + A[R] for each query.

export function rangeSumQuery(A, B) {
  function calculatePrefixSums(arr) {
    const prefixSums = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
      prefixSums[i] = prefixSums[i - 1] + arr[i];
    }

    return prefixSums;
  }

  function calculateRangeSum(prefixSums, left, right) {
    if (left === 0) return prefixSums[right];
    return prefixSums[right] - prefixSums[left - 1];
  }

  function findRangeSums(array, queries) {
    const prefixSums = calculatePrefixSums(array);
    const results = [];

    for (const [left, right] of queries) {
      results.push(calculateRangeSum(prefixSums, left, right));
    }

    return results;
  }

  return findRangeSums(A, B);
}
