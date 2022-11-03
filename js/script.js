//Tic Tac Toe


/*----- constants -----*/
const players = { 
    '1': ['moccasin', 'X'],
    '-1': ['lightpink', 'O'],
    'null': ['grey', '']
}

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


/*----- app's state (variables) -----*/
let board = [] 
let turn = 1
let winner;

/*----- cached element references -----*/
const gridEl = document.querySelector('.grid')
const resetBtnEl = document.querySelector('button')
const cellEls = document.querySelectorAll('.cell')

/*----- Event Listeners -----*/
gridEl.addEventListener('click', handleClick)
resetBtnEl.addEventListener('click', resetGame)


/*----- functions -----*/

resetGame()

function handleClick(e) {
    let cellEl = e.target
    if (cellEl.classList.contains('cell')){
    const idx = parseInt(cellEl.id)
    //if (board[idx]) return
    board[idx] = turn
    turn *= -1
    let cellColor = players[turn][0]
    let cellText = players[turn][1]
    cellEl.style.backgroundColor = cellColor
    cellEl.innerHTML = `<h1>${cellText}</h1>`
    } 
}

function resetGame() { 
    board = []
    cellEls.forEach(cell => {
        cell.style.backgroundColor = players['null'][0]
        cell.innerHTML = players['null'][1]
    })
}

