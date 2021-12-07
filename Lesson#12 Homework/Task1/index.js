arr = [1,2,4,[1,5,4],{key: "nummber"},null];
console.log(arr);
function reverseByDan(arr) {
    arr.unshift(arr[arr.length-1]);
    arr.pop();
    return arr;
}
console.log(reverseByDan(arr));