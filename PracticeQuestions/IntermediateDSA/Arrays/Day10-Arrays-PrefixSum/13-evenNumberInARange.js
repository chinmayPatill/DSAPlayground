// Problem Description
// You are given an array A of length N and Q queries given by the 2D array B of size Q×2.

// Each query consists of two integers B[i][0] and B[i][1].

// For every query, your task is to find the count of even numbers in the range from A[B[i][0]] to A[B[i][1]].

export function evenNumberInARange(A, B) {
  function findpfEven(A) {
    const pf = [];
    if (Number(A[0]) % 2 === 0) {
      pf[0] = 1;
    } else {
      pf[0] = 0;
    }
    for (let i = 1; i < A.length; i++) {
      if (Number(A[i]) % 2 === 0) {
        pf[i] = pf[i - 1] + 1;
      } else {
        pf[i] = pf[i - 1];
      }
    }
    return pf;
  }

  function findEvenNumInRange(A, B) {
    const pf = findpfEven(A);

    const res = [];
    for (let i = 0; i < B.length; i++) {
      let l = B[i][0];
      let r = B[i][1];

      res.push(l === 0 ? pf[r] : pf[r] - pf[l - 1]);
    }
    return res;
  }
  return findEvenNumInRange(A, B);
}
