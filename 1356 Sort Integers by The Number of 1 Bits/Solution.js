/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    let res = [];
    for(let i = 0; i<arr.length; i++) {
        res[i] = bits(arr[i]) * 10001 + arr[i];
    }
    res.sort((a, b) => a-b);

    for(let i =0; i<arr.length; i++) {
        res[i] %= 10001;
    }
    return res;
};

function bits(num) {
    let res = 0;
    while (num!==0) {
        res+= (num & 1);
        num >>= 1;
    }
    return res;
}
//Test Cases
console.log(sortByBits([0,1,2,3,4,5,6,7,8])); // [0,1,2,4,8,3,5,6,7]
console.log(sortByBits([1024,512,256,128,64,32,16,8,4,2,1])); // [1,2,4,8,16,32,64,128,256,512,1024]