/**
 * @param {string} palindrome
 * @return {string}
 */
var breakPalindrome = function(palindrome) {
    if (palindrome.length === 1) {
        return "";
    }
    for (let i = 0; i < palindrome.length; i++) {
        if (palindrome.charAt(i) !== 'a' &&
            (palindrome.length % 2 === 0 || i !== Math.floor(palindrome.length / 2))) {
            return palindrome.substring(0, i) + "a" + palindrome.substring(i + 1);
        }
    }
    return palindrome.substring(0, palindrome.length - 1) + "b";
};

//test cases:
console.log(breakPalindrome("abccba")); // returns "aaccba"
console.log(breakPalindrome("a")); // returns""