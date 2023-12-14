/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var onesMinusZeros = function(grid) {
  let diff = [];
  let cols = grid[0].length;
  let rows = grid.length;
  let subRow = [];
  let subCol = [];

  for(let i =0; i<rows; i++) {
    let onesRow = 0;
    let zerosRow = 0;
    for(let j=0; j<cols; j++) {
      if(grid[i][j] === 1) {
        onesRow++;
      } else if (grid[i][j] === 0) {
        zerosRow++;
      }
    }
    subRow.push(onesRow-zerosRow);
    diff.push([]);
  }

  for(let i =0; i<cols; i++) {
    let onesCol = 0;
    let zerosCol = 0;
    for(let j=0; j<rows; j++) {
      if(grid[j][i] === 1) {
        onesCol++;
      } else if (grid[j][i] === 0) {
        zerosCol++;
      }
    }
    subCol.push(onesCol-zerosCol);
  }

  for(let i=0; i<subRow.length; i++) {
    for(let j=0; j<subCol.length; j++) {
      diff[i][j] = subRow[i] + subCol[j];
    }
  }

  return diff;
};