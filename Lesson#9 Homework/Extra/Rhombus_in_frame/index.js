let result = [];
for (let i = 0; i < 9; i++) {
    result[i] = [];
    if (i === 0 || i === 8) {
        for (let j = 0; j < 13; j++) {
            result[i][j] = '*';
        }
    } else {
        result[i][0] = '*';
        for (let j = 1; j < 12; j++) {
            result[i][j] = ' ';
        }
        result[i][12] = '*';
    }
}

for (let i = 1; i < 5; i++) {
    for (let j = 7 - i; j < 6 + i; j++) {
        result[i][j] = '*';
    }
}
for (let i = 5; i < 8; i++) {
    for (let j = i - 1; j < 14 - i; j++) {
        result[i][j] = '*';
    }
}

for (let i = 0; i < 9; i++) {
    console.log(result[i].join(''));
}