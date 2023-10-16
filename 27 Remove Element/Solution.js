/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};

//Test Cases
var test1 = removeElement([3,2,2,3], 3);
console.log(test1); //2, nums = [2,2]

var test2 = removeElement([0,1,2,2,3,0,4,2], 2);
console.log(test2); //5, nums = [0,1,4,0,3]

var test3 = removeElement([1], 1);
console.log(test3); //0, nums = []