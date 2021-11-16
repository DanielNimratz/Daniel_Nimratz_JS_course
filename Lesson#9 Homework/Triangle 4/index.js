for (let i = 0; i < 10; i++) {
    let result = '';
    for (let j = i; j > 0; j--) {
        result += ' ';
    }
    for (let j = i;j < 10; j++) {
        result += '*';
    }
    console.log(result);
}