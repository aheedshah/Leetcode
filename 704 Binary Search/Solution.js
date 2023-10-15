/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left =0;
    let right = nums.length-1;
    let mid = (left+right)/2;

    while(right>=left) {
        mid = Math.floor((left+right)/2);
        if(nums[mid] == target) {
            return mid;
        } else if(nums[mid] > target) {
            right = mid-1;
        } else {
            left = mid+1;
        }
    }
    return -1;
};

//Test Cases
console.log(search([-1,0,3,5,9,12], 9)); //4
console.log(search([-1,0,3,5,9,12], 2)); //-1
console.log(search([5], 5)); //0