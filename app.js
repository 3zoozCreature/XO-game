/*-------------------------------- Constants --------------------------------*/
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
let currentPlayer = 'X'

/*------------------------ Cached Element References ------------------------*/
const message = document.querySelector('#message')
const squareEls = document.querySelectorAll('.sqr')
/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function (square) {
    square.addEventListener('click', function () {

        if (square.textContent !== '') {
            return
        }

        square.textContent = turn

        if (turn === 'X') {
            turn = 'O'
            message.textContent = "Player O's Turn"
        } else {
            turn = 'X'
            message.textContent = "Player X's Turn"
        }
    })
})
/*-------------------------------- Functions --------------------------------*/

function init() {
    turn = 'X'
    winner = false
    tie = false
    board = ['', '', '', '', '', '', '', '', '',]
    message.textContent = "Player X's turn"
    render()
}

init()

function render() {

}

function updateBoard() {
    for (let i; i < board.length; i++) {
        board[i].textContent = board[i]
    }
}

function updateMessage() {
    if (winner === false && tie === false) {
        message.textContent = "It's a Tie"
    } else if (winner === false && tie === true) {
        message.textContent = "It's a Tie"
    } else {
                message.textContent = `🎉Player ${winner} is the Winner🎉`

    }
}
console.log(board)