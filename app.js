/*-------------------------------- Constants --------------------------------*/
const message = document.querySelector('#message')
const board = document.querySelectorAll('.sqr')
const WINNING_COMBINATIONS = [
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

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
board.forEach(function(event) {
   event.addEventListener('click', function() {
        event.textContent = 'X'
    })
})

 