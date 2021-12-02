let a = {
    b: {
        c: {
            d: 1,
            m: 2
        }
    },
    e: {
        f: 1
    },
    g: 1
}

function copyObject(obj) {
    let copy = {};
    for (key in obj) {
        if (typeof (obj[key]) === "object") {
            copy[key] = copyObject(obj[key]);
        } else {
            copy[key] = obj[key];
        }
    }
    return copy;
}
console.log(copyObject(a));