/**
 *   Return the second largest number in the array.
 *   @param {Number[]} nums - An array of numbers.
 *   @return {Number} The second largest number in the array.
 **/
function getSecondLargest(nums) {
  // Complete the function
  let max = 0;
  let secondMax = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(nums[i], max);
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > secondMax && nums[i] != max) {
      secondMax = nums[i];
    }
  }
  return secondMax;
}

const nums = [1, 2, 3, 4, 5];
console.log(getSecondLargest(nums));
