/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while(n!==0) {
        n&=(n-1);
        count++
    }
    return count;
};

//Test Cases
console.log(hammingWeight(11)); // 3
console.log(hammingWeight(128)); // 1
console.log(hammingWeight(4294967293)); // 31