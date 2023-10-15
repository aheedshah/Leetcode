/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0) {
        return 0;
    }
    let left = 0;
    let right = 1;
    let maxProfit = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            const profit = prices[right] - prices[left];
            if (maxProfit < profit) {
                maxProfit = profit;
            }
        } else {
            left = right;
        }
        right++;
    }
    return maxProfit;
};

//Test Cases
console.log(maxProfit([7,1,5,3,6,4])); //Returns 5
console.log(maxProfit([7,6,4,3,1])); //Returns 0
