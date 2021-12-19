const alph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function continueAlphabet(arr) {
    let start = alph.indexOf(arr[0]);
    let end = alph.indexOf(arr[arr.length - 1]);
    let copy = alph.slice(start, end + 1);
    for (i of copy) {
        if (arr.includes(i) == false) {
            return i;
        }
    }
}

function nextChar(a) {
    return String.fromCharCode(a.charCodeAt(0) + 1);
}
function continueAlphabet2(arr) {
    for (i = 0;i < arr.length; i++) {
        if (arr[i+1] != nextChar(arr[i])) {
            return (nextChar(arr[i]));
        }
    }
}

// console.time('continueAlphabet2');
// continueAlphabet2(['h','j','k']);
// console.timeEnd('continueAlphabet2');

// console.time('continueAlphabet');
// continueAlphabet(['h','j','k']);
// console.timeEnd('continueAlphabet');


// let a = null;
// for (i = 0;i < 10000; i++){
//     a = continueAlphabet(['h','j','k']);
// }

// let b = null;
// for (i = 0;i < 10000; i++){
//     b = continueAlphabet(['h','j','k']);
// }


// console.log(continueAlphabet(['h','j','k']))