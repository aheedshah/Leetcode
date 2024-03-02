/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left=0;
    let right=nums.length-1;
    let solArr = new Array(nums.length);
    for(let i =nums.length-1; i>=0; i--) {
        if(Math.abs(nums[left]) > Math.abs(nums[right])) {
            solArr[i] = (nums[left]*nums[left]);
            left++;
        } else {
            solArr[i] = (nums[right]*nums[right]);
            right--;
        }
    }
    return solArr;
};