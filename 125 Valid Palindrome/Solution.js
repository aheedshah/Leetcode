/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^A-Za-z0-9]/g, '');
    str = str.toLowerCase();

    for(let i =0; i<str.length; i++) {
        if(str.charAt(i) != str.charAt(str.length-i-1)) {
            return false;
        }
    }
    return true;
};