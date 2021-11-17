const num = parseInt(prompt('Height of David`s Star'));
const k = parseInt(num / 3);
let result = [];
for (let i = 0; i <= num + k; i++) {
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

for (let i = k; i < num + k; i++) {
    for (let j = i-k+2; j < (num * 2) - (i-k-1); j++) {
        result[i][j] = '*';
    }
}

for (let i = 0;i < num + k; i++) {
    console.log(result[i].join(''))
}