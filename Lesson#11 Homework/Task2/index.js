let Dov = {
    age: 60,
    height: "178cm",
    family: {
        Daniel: {
            age: 16,
            height: "185cm"
        },
        Mishel: {
            age: 14,
            height: "165cm ¯\_(ツ)_/¯"
        },
        Natali: {
            age: 50,
            height: "180cm"
        }
    }
}

function copyObject(obj) {
    let copy = {};
    for (key in obj) {
        copy[key] = obj[key];
    }
}
copyObject(Dov);