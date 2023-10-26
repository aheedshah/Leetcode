/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    allperms(res,[],nums);
    return res;
};

let allperms = function (res, arr, nums) {
    let temp1 = null;
    let temp2 = null;

    if(nums.length === 0) {
        return res.push(arr);
    }
    for (let i = 0; i<nums.length; i++) {
        temp1 = Array.from(arr);
        temp1.push(nums[i])

        temp2 = Array.from(nums);
        temp2.splice(i, 1);

        allperms(res, temp1, temp2);
    }
}


//Test Cases
let nums = [1,2,3];
console.log(permute(nums)); //[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

nums = [0,1];
console.log(permute(nums)); //[[0,1],[1,0]]

nums = [1];
console.log(permute(nums)); //[[1]]