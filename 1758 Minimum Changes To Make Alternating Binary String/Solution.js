/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
  var counts = (str, char) => {
    let count = 0
    for(let i=0; i<str.length; i++) {
      if(str[i] !== char) {
        count++;
      }
      char = char === '0' ? '1' : '0';
    }
    return count;
  }

  const countOfZeroes = counts(s, '0');
  const countOfOnes = counts(s, '1');
  return Math.min(countOfZeroes, countOfOnes);
};