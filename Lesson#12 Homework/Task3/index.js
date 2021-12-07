let arr = [1, 3, 5, 3, 2, 6, 3];
function deleteParticularNumber(arr) {
    parNum = +prompt("Which number will not be in the array?");
    for (i of arr) {
        if (i === parNum) {
            arr.splice(arr.indexOf(i),1);
        }
    }
    return arr;
}
console.log(deleteParticularNumber(arr))