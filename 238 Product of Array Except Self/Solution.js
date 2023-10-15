/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let arr = [];
    for(let i =0; i<nums.length; i++) {
        let val = 1;
        for(let j=0; j<nums.length; j++) {
            if(i===j) {
                j++;
            }
            if(j===nums.length) {
                break;
            }
            val = val*nums[j];
        }
        arr.push(val);
    }
    return arr;
};

//Test Cases
console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));