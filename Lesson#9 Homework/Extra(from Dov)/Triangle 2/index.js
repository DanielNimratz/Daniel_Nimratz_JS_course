for (let i = 10; i > 0; i--) {
    let result = '';
    for (let j = i; j < 10; j++) {
        result += ' ';
    } 
    for (let j = i+(i-1); j > 0; j--) {
        result += '*';
    }
    console.log(result)
}