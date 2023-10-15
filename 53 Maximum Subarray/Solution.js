/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currSum = nums[0]; //this hold the current maximum subarray
    let maxSum = nums[0]; //this holds the max subarray
    for(let i =1; i<nums.length; i++) {
        currSum = Math.max(nums[i], currSum+nums[i]);
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum;
};

//Test Cases
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); //6
console.log(maxSubArray([1])); //1
console.log(maxSubArray([5,4,-1,7,8])); //23