/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  //Second approach
  let arr = nums.sort();
  for(let i =0; i<arr.length-1; i+=2) {
    if(arr[i] !== arr[i+1]) {
      return arr[i];
    }
  }

  return arr[arr.length - 1]; //last

  //First approach
  // nums = nums.sort();
  // let map = new Map();
  // let arr=[];
  // for(let i=0; i<nums.length; i++) {
  //     if(map.has(nums[i])) {
  //         let num = map.get(nums[i]);
  //         map.set(nums[i], num+1);
  //         arr.pop();
  //     } else {
  //         map.set(nums[i], 1);
  //         arr.push(nums[i]);
  //     }
  // }
  // return arr[0];
};