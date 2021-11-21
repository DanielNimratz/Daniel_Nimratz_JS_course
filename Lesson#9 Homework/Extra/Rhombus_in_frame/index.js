h = parseInt(prompt("Lenght of a side"));
let result = [];
let c = '';
for (let i = 0; i < h * 2 + 3; i++) {
    result[i] = [];
    c = '';
    for (let j = 0; j < h * 2 + 3; j++) {
        if (i === 0 || i === h * 2 + 2) {
            result[i][j] = '*';
        } else {
            result[i][j] = ' ';
            result[i][0] = '*';
            result[i][h * 2 + 2] = '*';
        }
        c += ' ';
    }
}

for (let i = 2; i < h + 2; i++) {
    for (let j = (h + 3) - i; j < h + i; j++) {
        result[i][j] = '*';
    }
}

for (let i = h + 2; i < h * 2 + 1; i++) {
    for (let j = i - h + 1; j < (h * 2) - (i - h) + 2; j++) {
        result[i][j] = '*';
    }
}

for (let i = 0; i < h * 2 + 3; i++) {
    console.log(result[i].join(''));
    if (i != h * 2 + 2) {
        console.log(c);
    }
}