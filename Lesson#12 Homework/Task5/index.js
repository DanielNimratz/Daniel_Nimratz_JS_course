// import {noRepeatArray} from '../Task4/index.js'
let arr1 = [1,2,5,7,3,6,2];
let arr2 = [2,3,6,2];
function findReps(arr1, arr2) {
    let reps = [];
    for (i of arr1) {
        if (arr2.includes(i)) {
            reps.push(i);
        }
    }
    // import { noRepeatArray } from "../Task4/index";
    return noRepeatArray(reps);
}
console.log(findReps(arr1, arr2));