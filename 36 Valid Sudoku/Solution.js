/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    //we looking at 3 for loops?
    let column = false;
    let row = false;
    let box = false;

    for(let i=0; i<board[0].length; i++) {
        let arr = [];
        for(let j=0; j<board[0].length; j++) {
            if(arr.includes(board[i][j])) {
                return false;
            } else if(board[i][j] === '.') {
                continue;
            } else {
                arr.push(board[i][j]);
            }
        }
    }
    row = true;

    for(let i=0; i<board[0].length; i++) {
        let arr = [];
        for(let j=0; j<board[0].length; j++) {
            if(arr.includes(board[j][i])) {
                return false;
            } else if(board[j][i] == '.') {
                continue;
            } else {
                arr.push(board[j][i]);
            }
        }
    }
    column = true;
    //0-2
    //3-5
    //6-8

    //3 to 6
    //6 to 9

    for(let i=0; i<board[0].length; i++) {
        let boxMap = {};
        for(let j =0; j<board[i].length; j++) {
            let box = board[3* Math.floor(i/3) +Math.floor(j/3)][3*(i%3)+(j%3)];
            if(box !== '.') {
                if(boxMap[box]) {
                    return false;
                }
                boxMap[box] = 1;
            }
        }
    }
    box = true;

    return row && column && box;
};
