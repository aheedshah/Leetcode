/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
  let maxScore = 0;
  for(let i=1; i<s.length; i++) {
    let left = s.substring(0, i);
    let right = s.substring(i, s.length);
    let numberOfZeroes = 0;
    let numberOfOnes = 0;
    //number of 0s in left + number of 1s in right
    for(let j=0; j<left.length; j++) {
      if(left[j] === '0') {
        numberOfZeroes++;
      }
    }

    for(let k=0; k<right.length; k++) {
      if(right[k] === '1') {
        numberOfOnes++;
      }
    }

    let score = numberOfZeroes + numberOfOnes;
    if(score > maxScore) {
      maxScore = score;
    }
  }
  return maxScore;
};