let arr = [5, 11, 5, 15];
let a = 10;

// [arr.indexOf(i), arr.indexOf(j)]

function detectSum(arr, a) {
    let arr1 = [];
    for (i of arr) {
        let b = arr.indexOf(i);
        while (b != -1) {
            arr1.push(b);
            b = arr.indexOf(i, b+1)
        }
        // console.log()
        
        for (j of arr) {
               
        }
    }
    console.log(arr1);
    console.log(arr);
}
detectSum(arr, a);