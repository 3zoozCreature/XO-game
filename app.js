/*-------------------------------- Constants --------------------------------*/
// This can be removed since I did the checkForWinner manually in the function
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
/*------------------------ Cached Element References ------------------------*/
const message = document.querySelector('#message')
const squareEls = document.querySelectorAll('.sqr')
const resetBtnEl = document.querySelector('#reset')
/*-------------------------------- Variables --------------------------------*/
let board
let turn
let winner
let tie
/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function (square) {
    square.addEventListener('click', handleClick)
})

resetBtnEl.addEventListener('click', init)
/*-------------------------------- Functions --------------------------------*/
function init() {
    board = ['', '', '', '', '', '', '', '', '']
    turn = 'X'
    winner = false
    tie = false

    render()
}

function render() {
    updateBoard()
    updateMessage()
}

function updateBoard() {
    for (let i = 0; i < board.length; i++) {
        squareEls[i].textContent = board[i]
    }
}

function updateMessage() {
    if (winner === false && tie === false) {
        message.textContent = `Player ${turn}'s Turn`
    } else if (winner === false && tie === true) {
        message.textContent = "It's a Tie!"
    } else {
        message.textContent = `🎉 Player ${winner} Wins! 🎉`
    }
}

function handleClick(event) {
    const squareIndex = Number(event.target.dataset.index)

    if (winner) {
        return
    }

    if (board[squareIndex] !== '') {
        return
    }

    placePiece(squareIndex)

    checkForWinner()

    checkForTie()

    switchPlayerTurn()

    render()
}

init()

function placePiece(index) {
    board[index] = turn
}

function checkForWinner() {

    if (
        board[0] !== '' && board[0] === board[1] && board[0] === board[2]
    ) {
        winner = turn
    }

    if (
        board[3] !== '' && board[3] === board[4] && board[3] === board[5]
    ) {
        winner = turn
    }

    if (
        board[6] !== '' && board[6] === board[7] && board[6] === board[8]
    ) {
        winner = turn
    }

    if (
        board[0] !== '' && board[0] === board[3] && board[0] === board[6]
    ) {
        winner = turn
    }

    if (
        board[1] !== '' && board[1] === board[4] && board[1] === board[7]
    ) {
        winner = turn
    }

    if (
        board[2] !== '' && board[2] === board[5] && board[2] === board[8]
    ) {
        winner = turn
    }

    if (
        board[0] !== '' && board[0] === board[4] && board[0] === board[8]
    ) {
        winner = turn
    }

    if (
        board[2] !== '' && board[2] === board[4] && board[2] === board[6]
    ) {
        winner = turn
    }
}

function checkForTie() {

    if (winner) {
        return
    }

    if (board.includes('')) {
        tie = false
    } else {
        tie = true
    }
}

function switchPlayerTurn() {

    if (winner) {
        return
    }

    if (turn === 'X') {
        turn = 'O'
    } else {
        turn = 'X'
    }
}
//This has been exhausting but the payoff is worth it to see my creation

// and yes I gave up and looked at the lab sue me