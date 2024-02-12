/*----- constants -----*/


/*----- state variables -----*/
let board, winner, score, currentPlayer
// board an array that is gonna store null for empty spaces, 'x' or 'o' strings.
// winner will store null if there is no winner, 'x' or 'o' depending on who won or 't' if a tie.

/*----- cached elements  -----*/
const boardEl = document.getElementById('board-container')
const scoreEl = document.getElementById('score-container')
const messageEl = document.querySelector('h2')

/*----- event listeners -----*/

boardEl.addEventListener('click', handleBoardClick)
document.querySelector('button').addEventListener('click', handleResetClick)

/*----- functions -----*/
init()

// setting the start of the game using state.
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
    renderMessage()
    renderScore()
};

function renderBoard() {
// use the board state and for each cell in the board array
// either show an X, O, or nothing in each child of the boardEl
    board.forEach(function(cell, index) {
    boardEl.children[index].innerHTML = board[index]
    });
};

function renderMessage() {
    if (!winner) {
        messageEl.innerText = `${currentPlayer.toUpperCase()} Player, let's go!` 
    } else if (winner === 't') {
        messageEl.innerText = 'TIE GAME'
    } else {
        messageEl.innerText = `${currentPlayer.toUpperCase()} WON!`
    }
}

// in order to test it use the console. invoke whatever function you are trying to test in the console.
function renderScore() {
    scoreEl.children[0].innerText = `${score.x} X Player`
    scoreEl.children[1].innerText = `${score.t} TIES`
    scoreEl.children[2].innerText = `${score.o} O Player`
}

function handleBoardClick(){
    console.log('board was clicked')
};

function handleResetClick(){
    console.log('reset was clicked')
};
