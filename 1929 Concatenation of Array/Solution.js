/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let result = [];
    for(let j = 0; j<2; j++ ){
        for(let i =0; i<nums.length; i++) {
            result.push(nums[i]);
        }
    }

    return result;
};

//Test Case
nums = [1,2,1];
console.log(getConcatenation(nums));
