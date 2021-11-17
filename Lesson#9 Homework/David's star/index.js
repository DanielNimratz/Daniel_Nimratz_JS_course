const num = parseInt(prompt('Height of David`s Star'));
let result = [];
for (let i = 0; i < num + 3; i++) {
    result[i] = [];
    for (let j = 0; j < (2 * num) - 1; j++) {
        result[i][j] = ' ';
    }
}
for (let i = 0; i < num; i++) {
    for (j = num - i; j < num + i +1; j++) {
        result[i][j] = '*';
    }
}

for (let i = 3; i < num + 3; i++) {
    for (let j = i-3; j < (num * 2) - (i-2); j++) {
        result[i][j] = '*';
    }
}

for (let i = 0;i < num + 3; i++) {
    console.log(result[i].join(''))
}