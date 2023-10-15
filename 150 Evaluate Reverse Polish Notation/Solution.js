/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let arr = [];
    for(let i=0; i<tokens.length; i++) {
        if(!isNaN(tokens[i])) {
            arr.push(tokens[i]);
        } else {
            let result =0;
            let first = parseInt(arr[arr.length-1]);
            let second = parseInt(arr[arr.length-2]);
            if(tokens[i] == "+") {
                result = second + first;
            } else if(tokens[i] == "-") {
                result = second - first;
            } else if(tokens[i] == "/") {
                result = Math.trunc(second/first);
            } else {
                result = second*first;
            }
            arr.pop();
            arr.pop();
            arr.push(result);
        }
    }
    return arr[0];
};

//Test cases
console.log(evalRPN(["2", "1", "+", "3", "*"])); //returns 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); //returns 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); //returns 22