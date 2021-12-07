let arr1 = [1, 2, 5, 7, 3, 6, 2];
let arr2 = [2, 3, 6, 2];

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

function findReps(arr1, arr2) {
    let reps = [];
    for (i of arr1) {
        if (arr2.includes(i)) {
            reps.push(i);
        }
    }
    return noRepeatArray(reps);
}
console.log(findReps(arr1, arr2));