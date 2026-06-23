/*-------------------------------- Constants --------------------------------*/
const message = document.querySelector('#message')
const board = document.querySelectorAll('.sqr')
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6]  
];
/*------------------------ Cached Element References ------------------------*/
let currentPlayer = 'X'
let turnO = true;
/*----------------------------- Event Listeners -----------------------------*/
board.forEach((board) => {
    board.addEventListener('click', function () {
        if (turnO) {
            board.innerText = 'O';
            turnO = false;
            board.disabled = true;
            checkWinner();
        } else {
            board.innerText = 'X';
            turnO = true;
            board.disabled = true;
            checkWinner();
        }
    });
});
/*-------------------------------- Functions --------------------------------*/
board.forEach(function(event) {
   event.addEventListener('click', function() {
        event.textContent = 'X'
    })
})

 