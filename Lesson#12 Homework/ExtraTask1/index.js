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
console.log(continueAlphabet(['h','j','k']));