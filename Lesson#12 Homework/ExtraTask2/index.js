let arr = [7, 1, 8, 9];
let a = 16;

function detectSum(arr, a) {
    let res = [];
    loop1: for (i of arr) {
        if (i == a / 2) {
            res.push(arr.indexOf(i));
            arr[arr.indexOf(i)] = undefined;
        } else {
            for (j of arr) {
                if (i + j == a) {
                    res = [arr.indexOf(i), arr.indexOf(j)];
                    break loop1;
                }
            }
        }
    }
    return res;
}
console.log(detectSum(arr, a));