/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let newMap = new Map();
    let result = [];
    for(let i =0; i<nums.length; i++) {
        if(newMap.has(nums[i])) {
            let number = newMap.get(nums[i]);
            number+=1;
            newMap.set(nums[i], number);
        } else {
            newMap.set(nums[i],1);
        }
    }

    //sorted map
    const mapSort1 = new Map([...newMap.entries()].sort((a, b) => b[1] - a[1]));
    //Converting keys to array
    let keys = Array.from(mapSort1.keys());

    for(let i=0; i<k; i++) {
        result.push(keys[i]);
    }
    return result;
};

//Test Cases
console.log(topKFrequent([1,1,1,2,2,3], 2));
console.log(topKFrequent([1], 1));