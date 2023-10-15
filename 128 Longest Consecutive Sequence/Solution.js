/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length == 0) {
        return 0;
    } else if(nums.length == 1) {
        return 1;
    }

    let numMap = new Map();
    for(let i=0; i<nums.length; i++) {
        if(numMap.has(nums[i])) {
            let val = numMap.get(nums[i]);
            val+=1;
            numMap.set(nums[i], val);
        } else {
            numMap.set(nums[i], 1);
        }
    }

    let keys = Array.from(numMap.keys());
    let largestConsec = 1;

    for(let i=0; i<keys.length; i++) {
        if(!numMap.has(keys[i]-1)) {
            let currNum = keys[i];
            let tempCount = 1;

            while(numMap.has(currNum+1)) {
                currNum++;
                tempCount++;
            }
            largestConsec = Math.max(largestConsec, tempCount);
        }
    }
    return largestConsec;
};

//Test Case
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); //4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); //9
console.log(longestConsecutive([1,2,0,1])); //3