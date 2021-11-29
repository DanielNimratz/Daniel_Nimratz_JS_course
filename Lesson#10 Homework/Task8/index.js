function generateRandomColor(coloredBox) {
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);;
    document.getElementsByClassName(coloredBox)[0].style.backgroundColor = randomColor;
}
// let button = document.getElementsByClassName('reset');

function changeColor() {
    let colors = [];
    for (let i = 1; i <= 10; i++) {
        currentBox = 'coloredBox' + i;
        generateRandomColor(currentBox);
        colors[i - 1] = document.getElementsByClassName(currentBox)[0].style.backgroundColor;
        console.log(colors[i - 1])
    }
    document.body.style.background = "linear-gradient(to right, "+colors[0]+", "+colors[1]+", "+colors[2]+", "+colors[3]+", "+colors[4]+", "+colors[5]+", "+colors[6]+", "+colors[7]+", "+colors[8]+", "+colors[9]+")";
    // document.body.style.background = "linear-gradient(to right, "+colors[0]+", "+colors[9]+")";
}