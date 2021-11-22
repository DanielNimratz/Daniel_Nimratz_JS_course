h = parseInt(prompt());
result = [];
const c = h * 2 - 1;
for (let i = 0; i < c; i++) {
    result[i] = [];
    for (let j = 0; j < c; j++) {
        result[i][j] = ' ';
    }
}

for (let i = 0; i < h; i++) {
    for (let j = h - 1 - i; j < h + i; j++) {
        result[i][j] = '*';
    }
}

for (let i = h; i < c; i++) {
    for (let j = i - h + 1; j < (h * 2) - (i - h) - 2; j++) {
        result[i][j] = '*';
    }
}

for (let i = 2; i < h; i++) {
    for (let j = h + 1 - i; j < i + h - 2; j++) {
        result[i][j] = ' ';
    }
}

for (let i = h; i < c- 2; i++) {
    for (let j = i - h + 3; j < h * 2 + (h - 4) - i; j++) {
        result[i][j] = ' ';
    }
}

for (let i = 0; i < c; i++) {
    console.log(result[i].join(''));
}