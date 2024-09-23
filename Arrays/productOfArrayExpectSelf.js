// Given an integer array nums, return an array answer such that
// answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

var productExceptSelf = function (nums) {
  let pre = [];
  let suf = [];
  let result = [];
  let n = nums.length;
  pre[0] = 1;
  suf[n - 1] = 1;
  for (let i = 1; i < n; i++) {
    pre[i] = pre[i - 1] * nums[i - 1];
  }
  for (let i = n - 2; i >= 0; i--) {
    suf[i] = suf[i + 1] * nums[i + 1];
  }
  for (let i = 0; i < n; i++) {
    result[i] = pre[i] * suf[i];
  }
  return result;
};
