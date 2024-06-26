// Problem Description
// Given an array A of N integers and also given two integers B and C.
// Reverse the elements of the array A within the given inclusive range [B, C].

export function reverseInRange(A, B, C) {
  while (B < C) {
    [A[B], A[C]] = [A[C], A[B]];
    B++;
    C--;
  }
  return A;
}
