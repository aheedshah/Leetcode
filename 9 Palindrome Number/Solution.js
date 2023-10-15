/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = x.toString();
    let reverseNum = [];
    let arr =[];
    for(let i =0; i<num.length ;i++) {
        arr.push(num.charAt(i));
        reverseNum.push(num.charAt(i));
    }

    reverseNum.reverse();

    for(let i=0; i<arr.length; i++) {
        if(arr[i] !== reverseNum[i]){
            return false;
        }
    }
    return true;
};

//Test cases
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(-101));