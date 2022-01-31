const second = document.querySelector('.seconds');
const minute = document.querySelector('.minutes');
const hour = document.querySelector('.hours');

function time() {
    const date = new Date();
    const sec = date.getSeconds();
    const min = date.getMinutes();
    const hr = date.getHours();

    const angSec = sec * 6;
    const angMin = min * 6;
    const angHr = hr * 30 + min * 0.5;

    second.style.transform = `rotate(${angSec}deg)`;
    minute.style.transform = `rotate(${angMin}deg)`;
    hour.style.transform = `rotate(${angHr}deg)`;
}
setInterval(time, 1000);