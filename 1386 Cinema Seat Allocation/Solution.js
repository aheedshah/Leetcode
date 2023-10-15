/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    const cnt = new Map();
    for (const t of reservedSeats) {
        cnt.set(t[0], (cnt.get(t[0]) || 0) | (1 << (t[1] - 1)));
    }

    let res = 0,
        q1 = 0b111111110,
        q2 = 0b111100000,
        q3 = 0b000011110,
        q4 = 0b001111000;

    for (const v of cnt.values()) {
        if ((q1 & v) === 0) res += 2;
        else if ((q2 & v) === 0 || (q3 & v) === 0 || (q4 & v) === 0) res++;
    }

    return res + (n - cnt.size) * 2;
}

console.log(maxNumberOfFamilies(3, [[1,2],[1,3],[1,8],[2,6],[3,1],[3,10]])); //returns 4
console.log(maxNumberOfFamilies(2, [[2,1],[1,8],[2,6]])); //returns 2
console.log(maxNumberOfFamilies(4, [[4,3],[1,4],[4,6],[1,7]])); //returns 4