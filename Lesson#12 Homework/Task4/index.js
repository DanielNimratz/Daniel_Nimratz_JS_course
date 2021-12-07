let arr = [1, 3, 5, 3, 2, 6, 3];
function noRepeatArray(arr) {
    let arr1 = [];
    for (i of arr) {
        if (arr1.includes(i)) {
            continue;
        } else {
            arr1.push(i);
        }
    }
    return arr1;
}
console.log(noRepeatArray(arr));