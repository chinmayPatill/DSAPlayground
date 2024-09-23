// Given an integer array nums, find a subarray that has the largest product, and return the product.
function maximumProductSubarray(arr) {
  let maxProduct = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let currentProduct = 0;

    for (let j = i; j < arr.length; j++) {
      currentProduct *= arr[j];

      if (currentProduct > maxProduct) maxProduct = currentProduct;
    }
  }

  return maxProduct;
}

const nums = [2, 3, -2, 4];
