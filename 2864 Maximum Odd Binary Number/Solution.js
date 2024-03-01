/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    s = s.split('').sort().reverse();
    if(s[s.length-1] === '1') {
        result = s.join('');
        return result;
    }

    for(let i = s.length-1; i>=0; i--) {
        if(s[i] === '1') {
            s[i] = '0';
            s[s.length-1] = '1';
            break;
        }
    }
    let result = s.join('');
    return result;
};