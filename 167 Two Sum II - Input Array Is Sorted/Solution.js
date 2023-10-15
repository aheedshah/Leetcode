/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let result = []
    //return the indices
    let left = 0;
    let right = numbers.length-1;

    for(let i=0; i<numbers.length; i++) {
        while(left<right) {
            if(numbers[left] + numbers[right] == target) {
                result.push(left+1);
                result.push(right+1);
                return result;
            } else if(numbers[left] + numbers[right] > target) {
                right--;
            } else if(numbers[left] + numbers[right] < target) {
                left++;
            }
        }
    }

    return result;
};

//Test Case
console.log(twoSum([2,7,11,15], 9)); //[1,2]
console.log(twoSum([2,3,4], 6)); //[1,3]
console.log(twoSum([-1,0], -1)); //[1,2]