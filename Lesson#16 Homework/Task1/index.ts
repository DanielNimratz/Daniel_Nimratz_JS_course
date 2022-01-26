export {};
function getTime(): void {
    let date: Date = new Date();
    let time: string = prettyNum(date.getHours()) + ":" + prettyNum(date.getMinutes()) + ":" + prettyNum(date.getSeconds());
    console.log(time);
}

function prettyNum (num: number): string | number {
    if (num < 10) {
        return '0'+num;
    } else {
        return num;
    }
}
getTime();