function factorial(n) {
    let result = 1;
    for (i = 2; i <= n; i++) {
        result = result * i;
    }
    console.log(result);
}
factorial(10);