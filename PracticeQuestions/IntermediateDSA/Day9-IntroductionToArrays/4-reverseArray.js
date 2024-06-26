// Problem Description
// You are given a constant array A.
// You are required to return another array which is the reversed form of the input array.

export function reverseArray(A) {
  let p1 = 0;
  let p2 = A.length - 1;

  while (p1 < p2) {
    [A[p1], A[p2]] = [A[p2], A[p1]];
    p1++;
    p2--;
  }
  return A;
}
