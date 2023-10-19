/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let newS = [];
    let newT = [];

    for(let i =0; i<s.length; i++) {
        if(s.charAt(i) === '#') {
            newS.pop();
        } else {
            newS.push(s.charAt(i));
        }
    }

    for(let i = 0; i<t.length; i++) {
        if(t.charAt(i) === '#') {
            newT.pop();
        } else {
            newT.push(t.charAt(i));
        }
    }

    newS = newS.join("");
    newT = newT.join("");
    return newS === newT;
};

//Test Cases
console.log(backspaceCompare("ab#c", "ad#c")); //true
console.log(backspaceCompare("ab##", "c#d#")); //true
console.log(backspaceCompare("a##c", "#a#c")); //true
console.log(backspaceCompare("a#c", "b")); //false