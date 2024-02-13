/*----- constants -----*/
winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [3, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// if you use forEach on this, if i am checking did we win in the the middle 
// are there array iterator methods that stops ealry. check the lesson

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


function render() {
    renderBoard()
    renderMessage()
    renderScore()
};

function renderBoard() {
    // use the board state and for each cell in the board array
    // either show an X, O, or nothing in each child of the boardEl
    board.forEach(function (cell, index) {
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

function handleBoardClick(evt) {
    if (
        evt.target.id === 'board-container'
        || board[evt.target.id]
// ^ When you need to check certain things about the game don’t check the dom, rely on ur state
    ) return
    const idx = evt.target.id;
    board[idx] = currentPlayer;

    changeTurn();
    render()
};

function handleResetClick() {
    console.log('reset was clicked')
};

function changeTurn() {
    if (currentPlayer === 'x') {
        currentPlayer = 'o'
    } else {
        currentPlayer = 'x'
    }
};

function checkWinner(){
    // 1. rely on state - in this case it would the board. this is how you would determine who won if you were looking at it.
    // how would you write out a conditional in conjuction with board/winning combo. look at how to use the winning C array 
    // by looking at each combo at a time. are you gonna put return in an if statement? where you use that variable is up to you. 

    let hasWon = winningCombos.some(function(winCombo){
        
    });

    
};