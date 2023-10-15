/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = [];

    for(let i =0; i<s.length; i++) {
        if(s.charAt(i) === '('){
            arr.push(')');
        } else if(s.charAt(i) === '{') {
            arr.push('}');
        } else if(s.charAt(i) === '[') {
            arr.push(']');
        } else {
            if(arr[arr.length-1] === s.charAt(i)) {
                arr.pop();
            } else {
                return false;
            }
        }
    }

    return arr.length === 0;
};

//Test Cases
console.log(isValid("()")); //true
console.log(isValid("()[]{}")); //true
console.log(isValid("(]")); //false
console.log(isValid("([)]")); //false