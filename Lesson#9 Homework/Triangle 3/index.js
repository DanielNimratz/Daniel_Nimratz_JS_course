for (let i = 9; i >= 0; i--) {
    let result = '';
    for (let j = i; j > 0; j--) {
        result += ' ';
    }
    for (let j = 10 - i; j > 0; j--) {
        result += '*';
    }
    console.log(result);
}