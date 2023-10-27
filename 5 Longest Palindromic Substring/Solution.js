/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length===1) {
        return s;
    }
    let longestPalindromeIndices = [0,0];

    for(let i =0; i<s.length; i++) {
        let currIndices = expandAroundCenter(s, i, i);
        if (currIndices[1] - currIndices[0] > longestPalindromeIndices[1] - longestPalindromeIndices[0]) {
            longestPalindromeIndices = currIndices;
        }

        // For even length palindromes
        if (i + 1 < s.length && s[i] === s[i + 1]) {
            let evenIndices = expandAroundCenter(s, i, i + 1);

            if (evenIndices[1] - evenIndices[0] > longestPalindromeIndices[1] - longestPalindromeIndices[0]) {
                longestPalindromeIndices = evenIndices;
            }
        }
    }

    return s.slice(longestPalindromeIndices[0], longestPalindromeIndices[1]+1);
};

function expandAroundCenter(s, i, j) {
    while (i >= 0 && j < s.length && s[i] === s[j]) {
        i--;
        j++;
    }
    return [i + 1, j - 1];
}

//Test Cases
console.log(longestPalindrome("babad")); // "bab"
console.log(longestPalindrome("cbbd")); // "bb"
console.log(longestPalindrome("a")); // "a"
console.log(longestPalindrome("ac")); // "a"