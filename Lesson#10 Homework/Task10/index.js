function numbersBetween(x, y) {
    if (x > y) {
        for (let i = x; i >= y; i--) {
            console.log(i);
        }
    } else {}
    for (let i = x; i <= y; i++) {
        console.log(i);
    }
}
numbersBetween(12, 5);