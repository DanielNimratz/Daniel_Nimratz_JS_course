"use strict";
exports.__esModule = true;
function getTime() {
    var date = new Date();
    var time = prettyNum(date.getHours()) + ":" + prettyNum(date.getMinutes()) + ":" + prettyNum(date.getSeconds());
    console.log(time);
}
function prettyNum(num) {
    if (num < 10) {
        return '0' + num;
    }
    else {
        return num;
    }
}
getTime();
