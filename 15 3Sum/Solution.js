/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    //sort
    nums.sort((a,b) => a-b);
    let res = {};
    for(let i =0; i<nums.length-2; i++) {
        let l = i+1; //left pointer
        let r = nums.length-1; //right pointer
        while (l<r) {
            let sum = nums[i] + nums[l] + nums[r];
            if(sum === 0) {
                let key = nums[i].toString() + nums[l].toString() + nums[r].toString();
                res[key] = [nums[i], nums[l], nums[r]];
            }

            if(sum < 0) {
                l++;
            } else {
                r--;
            }
        }
    }
    return Object.values(res);
};

//Test Cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, 0, 1], [-1, -1, 2]]

console.log(threeSum([0, 0, 0, 0])); // [[0, 0, 0]]

console.log(threeSum([-2, 0, 1, 1, 2])); // [[-2, 0, 2], [-2, 1, 1]]

