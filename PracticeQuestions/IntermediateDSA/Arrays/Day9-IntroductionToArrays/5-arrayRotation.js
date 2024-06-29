// Problem Description
// Given an integer array A of size N and an integer B,
// you have to return the same array after rotating it B times towards the right.

export function arrayRotation(A, B) {
  function revRnge(A, B, C) {
    while (B < C) {
      [A[B], A[C]] = [A[C], A[B]];
      B++;
      C--;
    }
    return A;
  }
  B = B % A.length;
  return revRnge(
    revRnge(revRnge(A, 0, A.length - 1), 0, B - 1),
    B,
    A.length - 1
  );
}
