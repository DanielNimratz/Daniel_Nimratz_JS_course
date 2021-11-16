let arr = [10, 20, 30, 50, 235, 3000];
for (let i = 0; i < arr.length; i++) {
    let num = Array.from(arr[i])
    alert(num[i]);
    if (num[0] == '1' || num[0] == '5' || num[0] == '2') {
        alert("yes");
    }
}