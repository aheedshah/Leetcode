/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
  let firstBiggest = nums[0];
  let secondBiggest = -Infinity;
  let firstSmallest = nums[0];
  let secondSmallest = Infinity;

  for(let i =1; i<nums.length; i++) {
    if(nums[i] > firstBiggest) {
      secondBiggest = firstBiggest;
      firstBiggest = nums[i];
    } else if(nums[i] > secondBiggest) {
      secondBiggest = nums[i];
    }

    if(nums[i]<firstSmallest) {
      secondSmallest = firstSmallest;
      firstSmallest = nums[i];
    } else if(nums[i]<secondSmallest) {
      secondSmallest = nums[i];
    }
  }

  return ((firstBiggest*secondBiggest) - (firstSmallest*secondSmallest));
};