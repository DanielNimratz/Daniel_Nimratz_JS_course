const status = document.querySelector('.status');

let isGameOn = true;
let currPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

const currTurn = () => `${currPlayer}'s turn`;

status.innerHTML = currTurn();

const winsConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function doTurn(clickedCell, clickedCellIndex) {
    board[clickedCellIndex] = currPlayer;
    clickedCell.innerHTML = currPlayer;
}

function changeTurn() {
    currPlayer = currPlayer === "X" ? "O" : "X";
    status.innerHTML = currTurn();
}

function resValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winsConditions[i];
        let a = board[winCondition[0]];
        let b = board[winCondition[1]];
        let c = board[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        alert(`${currPlayer} Won`);
        isGameOn = false;
        return;
    }

    let roundDraw = !board.includes("");
    if (roundDraw) {
        alert('It`s draw');
        isGameOn = false;
        return;
    }
    changeTurn();
}

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = +(clickedCell.getAttribute('cellIndex'));

    if (board[clickedCellIndex] !== "" || !isGameOn) {
        return;
    }

    doTurn(clickedCell, clickedCellIndex);
    resValidation();
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));