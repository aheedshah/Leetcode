/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    return word1.join('')===word2.join('');
};

//Test Cases
console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"])); //true
console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"])); //false
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])); //true