/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    //create a hashmap, see the frequency of each element and return the max frequency
    let map = new Map();
    for(let i = 0; i<nums.length; i++) {
        if(map.has(nums[i])) {
            let freq = map.get(nums[i]) + 1;
            map.set(nums[i], freq);
        } else {
            map.set(nums[i], 1);
        }
    }

    //find max freq
    const maxFrequency = Math.max(...map.values());

    // Filter out the numbers with maximum frequency
    const maxFreqElements = [...map.keys()].filter(num => map.get(num) === maxFrequency);

    return maxFrequency * maxFreqElements.length;
};