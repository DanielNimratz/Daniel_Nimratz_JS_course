for (let i = 2; i <= 1000; i++) {
    let is_prime = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            is_prime = false;
            break;
        }
    }
    if (is_prime) {
        console.log(i)
    }
}