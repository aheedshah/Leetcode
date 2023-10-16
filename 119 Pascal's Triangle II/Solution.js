/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let res = [1];
    for (let i = 0; i < rowIndex; i++) {
        let nextRow = Array(res.length+1).fill(0);
        for (let j = 0; j < res.length; j++) {
            nextRow[j] += res[j];
            nextRow[j+1] += res[j];
        }
        res = nextRow;
    }
    return res;
};

//Test Cases
console.log(getRow(0)); // [1]
console.log(getRow(1)); // [1,1]
console.log(getRow(2)); // [1,2,1]
console.log(getRow(3)); // [1,3,3,1]