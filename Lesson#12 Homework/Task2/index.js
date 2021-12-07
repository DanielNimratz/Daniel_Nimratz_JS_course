let arr =  [["name", "Andrew"], ["age", 24]];
function arrToObj(arr) {
    let obj = {};
    for (i of arr) {
        obj[i[0]] = i[1];
    }
    return obj;
}
console.log(arrToObj(arr));