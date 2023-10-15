/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //go to each element, sort it.
    //elements which are same go to one array and others go to different array

    let sortedArr = [];
    let result = [];

    for(let i =0; i<strs.length; i++) {
        let string = strs[i];
        string = string.split('').sort().join('');
        sortedArr.push(string);
    }

    let map = new Map();

    for(let i =0; i<sortedArr.length; i++) {
        if(map.has(sortedArr[i])) {
            let arr = map.get(sortedArr[i]);
            arr.push(i);
            map.set(sortedArr[i], arr);
        } else {
            map.set(sortedArr[i], [i]);
        }
    }

    let keys = Array.from(map.keys());

    for(let i=0; i<keys.length; i++) {
        let array = map.get(keys[i]);
        let newArr = [];

        for(let j =0; j<array.length; j++) {

            newArr.push(strs[array[j]]);
        }
        console.log(newArr);
        result.push(newArr);
    }




    if(result === []) {
        return [[""]];
    }
    return result;
};

//Test case
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));