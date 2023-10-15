/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let myArray = [];
    for(let i=0 ;i<matrix.length;i++) {
        if(matrix[i][matrix[i].length-1] >target) {
            myArray = matrix[i];
            break;
        } else if (matrix[i][matrix[i].length-1] ===target) {
            return true;
        }
    }

    let left = 0;
    let right = myArray.length-1;
    let mid = Math.floor((left+right)/2);

    while(right>=left) {
        mid = Math.floor((left+right)/2);
        if(myArray[mid] === target) {
            return true;
        } else if(myArray[mid] > target) {
            right = mid-1
        } else {
            left = mid+1;
        }
    }
    return false;
};

//Test Cases
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]],3)); //true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]],13)); //false
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]],1)); //true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]],50)); //true