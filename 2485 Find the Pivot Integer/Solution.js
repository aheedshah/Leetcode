/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    //Use arithmetic formula
    let pivot = Math.sqrt(n*(n+1)/2);

    if(Number.isInteger(pivot)) {
        return Math.floor(pivot);
    }

    return -1;
};