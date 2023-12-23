/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
  let curr = [0,0];
  let allpaths = [];
  allpaths.push(curr);
  for(let i =0; i<path.length; i++) {
    let vertical = curr[0];
    let horizontal = curr[1];
    if(path[i] === 'N') {
      vertical++;
    } else if(path[i] === 'S') {
      vertical--;
    } else if(path[i] === 'E') {
      horizontal++;
    } else if(path[i] === 'W') {
      horizontal--;
    }
    curr = [vertical, horizontal];
    const isInArray = allpaths.some(subArray => subArray.every((value, index) => value === curr[index]));
    if(isInArray) {
      return true;
    }
    allpaths.push(curr);
  }
  return false;
};