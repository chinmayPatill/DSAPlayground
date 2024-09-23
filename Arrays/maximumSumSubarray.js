// Given an integer array nums, find the subarray with the largest sum, and return its sum.

function printAllSubarrays(arr) {
  let maxSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;

    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];

      if (currentSum > maxSum) maxSum = currentSum;
    }
  }

  return maxSum;
}
