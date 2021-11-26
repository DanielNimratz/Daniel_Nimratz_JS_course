function answerQuestion(yesAnswer, noAnswer) {
    let answer = confirm("Yes or no?");
    if (answer) {
        yesAnswer();
    } else {
        noAnswer();
    }
}

let answerQuestion1 = function (yesAnswer, noAnswer) {
    let answer = confirm("Yes or no?");
    if (answer) {
        yesAnswer();
    } else {
        noAnswer();
    }
}

function sayYes() {
    alert("Yes");
}

function sayNo() {
    alert("No");
}

answerQuestion1(sayYes, sayNo);