/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) {
        return false;
    }
    //convert them into character arrays, sort them and check if all elems are equal

    let sArr = [];
    let tArr = [];
    for(let i =0; i<s.length; i++) {
        sArr.push(s.charAt(i));
        tArr.push(t.charAt(i));
    }
    sArr.sort();
    tArr.sort();
    for(let i = 0;i<s.length; i++) {
        if(sArr[i] != tArr[i]) {
            return false;
        }
    }
    return true;
};

//Test cases
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
console.log(isAnagram("a", "ab"));