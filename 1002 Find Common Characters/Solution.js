/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  let result = [];
  let firstWordArr = words[0].split('');

  for(let letter of firstWordArr) {
    if(words.every(word => word.includes(letter))) {
      result.push(letter);
      words = words.map(word => word.replace(letter, ''));
    }
  }

  return result;
};