for (let i = 1; i <= 10; i++) {
    let result = '';
    for (let j = 10 - i; j > 0; j--) {
        result += ' ';
    }
    for (let j = i+(i-1); j > 0; j--){
        result += '*';
    }
    console.log(result);
}