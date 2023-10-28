/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [];
    let res = Array(temperatures.length).fill(0);
    for(let i = 0; i<temperatures.length; i++) {
        while(stack.length>0 && temperatures[i] > temperatures[stack[stack.length-1]]) {
            let index = stack.pop();
            res[index] = i-index;
        }
        stack.push(i);
    }
    return res;
};

//Test Cases
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]

console.log(dailyTemperatures([30, 40, 50, 60])); // [1, 1, 1, 0]

console.log(dailyTemperatures([30, 60, 90])); // [1, 1, 0]