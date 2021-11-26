randomNum = Math.floor(Math.random() * 10) + 1;
guessNum = +prompt("Guess a number");
function guess(guessNum, randomNum) {
    if (guessNum === randomNum) {
        alert("You guessed right!")
    } else {
        alert("You've got it wrong. The number was " + randomNum)
    }
}
guess(guessNum, randomNum);