/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = [];
    generate(result, "", 0, 0, n);
    return result;
};

function generate(result, s, open, close, n) {
    if (open === n && close === n) {
        result.push(s);
        return;
    }
    if (n>open) {
        generate(result, s + "(", open + 1, close, n);
    }
    if (open>close) {
        generate(result, s + ")", open, close + 1, n);
    }
}

//Test Cases
generateParenthesis(3); //["((()))","(()())","(())()","()(())","()()()"]
generateParenthesis(1); //["()"]
generateParenthesis(2); //["(())","()()"]
generateParenthesis(4); //["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]