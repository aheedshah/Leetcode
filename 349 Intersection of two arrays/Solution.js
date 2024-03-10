/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    /*Approach 1
    let map1 = new Map();
    for(let i = 0; i<nums1.length; i++) {
        if(map1.has(nums1[i])) {
            let count = map1.get(nums1[i]) + 1;
            map1.set(nums1[i], count);
        } else {
            map1.set(nums1[i], 1);
        }
    }

    let arr = [];
    for(let i =0; i<nums2.length; i++) {
        if(map1.has(nums2[i])) {
            arr.push(nums2[i]);
        }
    }

    return [...new Set(arr)];
    */

    //Approach 2

    let set1 = new Set(nums1);
    let set2 = new Set(nums2);

    return Array.from(new Set([...set1].filter(x => set2.has(x))));
};