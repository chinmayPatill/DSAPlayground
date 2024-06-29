export function productArrayPuzzle(A) {
  let n = A.length;
  let product = new Array(n).fill(1);

  let prefix = 1;
  let suffix = 1;

  for (let i = 0; i < n; i++) {
    product[i] *= prefix;
    prefix *= A[i];

    product[n - 1 - i] *= suffix;
    suffix *= A[n - 1 - i];
  }

  return product;
}
