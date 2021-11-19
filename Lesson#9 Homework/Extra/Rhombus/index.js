for (let i = 0; i < 4; i++) {
    let result = '';
    for (let j = 3 - i; j > 0; j--) {
        result += ' ';
    }
    for (let j = i+(i+1); j > 0; j--){
        result += '*';
    }
    console.log(result);
}
for (let i = 3; i > 0; i--) {
    let result = '';
    for (let j = i; j < 4; j++) {
        result += ' ';
    } 
    for (let j = i+(i-1); j > 0; j--) {
        result += '*';
    }
    console.log(result)
}