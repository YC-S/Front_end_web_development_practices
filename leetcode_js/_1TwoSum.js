/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let nums = [1, 2, 3, 4, 5, 6, 7, 8];
const twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
};
console.log(twoSum(nums, 3));
