/*----- constants -----*/


/*----- state variables -----*/
let board, winner, score, currentPlayer


/*----- cached elements  -----*/
const boardEl = document.getElementById('board-container')
const scoreEl = document.getElementById('score-container')
const messageEl = document.querySelector('h2')

/*----- event listeners -----*/

boardEl.addEventListener('click', handleBoardClick)
document.querySelector('button').addEventListener('click', handleResetClick)

/*----- functions -----*/
init()

function init() {
    winner = null;
    score = {
        x: 0,
        o: 0,
        t: 0
    }
    currentPlayer = 'x'
    board = [
        null, null, null,
        null, null, null,
        null, null, null,
    ]
    render()
}

function render(){
    renderBoard()
};

function renderBoard() {
// use the board state and for each cell in the board array
// either show an X, O, or nothing in each child of the boardEl
    board.forEach(function(cell) {
       console.log(cell)
    })
};

function handleBoardClick(){
    console.log('board was clicked')
};

function handleResetClick(){
    console.log('reset was clicked')
};

