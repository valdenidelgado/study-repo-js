var state = { board: [], currentGame: [], savedGames: [] }

function start(){
    createBoard()
    createGame()
}

function createBoard() {
    for (var i = 0; i < 6; i++) {
        state.board.push(Math.floor(Math.random() * 60) + 1)
    }
    state.board.sort(function (a, b) { return a - b })
    console.log(state.board)
    createGame()
}

function createGame() {
    for (var i = 0; i < 6; i++) {
        state.currentGame.push(Math.floor(Math.random() * 60) + 1)
    }
    state.currentGame.sort(function (a, b) { return a - b })
    console.log(state.currentGame)
    checkGame()
}

function render() {
    renderBoard()
}

function renderBoard() {
    let divBoard = document.querySelector('#megasena-board')
    divBoard.innerHTML = ''

    let ulNumbers = document.createElement('ul')

    for (var i = 0; i < state.board.length; i++) {
        let currentNumber = state.board[i]
        let liNumber = document.createElement('li')
        liNumber,textContent = currentNumber
        ulNumbers.appendChild(liNumber)
    }

    divBoard.appendChild(ulNumbers)


function addNumberToGame(numberToAdd) {
    if (numberToAdd < 1 || numberToAdd > 60) {
        console.error('Numero invalido', numberToAdd)
        return
    }

    if (state.currentGame.length >= 6) {
        console.error('O jogo ja esta completo.')
        return
    }

    state.currentGame.push(numberToAdd)
}

function removeNumberFromGame(numberToRemove) {
    if (numberToRemove < 1 || numberToRemove > 60) {
        console.error('Numero invalido', numberToRemove)
        return
    }

    let newGame = []

    for (let i = 0; i < state.currentGame.length; i++) {
        let currentNumber = state.currentGame[i]

        if (currentNumber === numberToRemove) {
            continue
        }

        newGame.push(currentNumber)
    }

    state.currentGame = newGame
}

function isNumberInGame(numberToCheck) {
    return state.currentGame.includes(numberToCheck)
}

function saveGame() {
    if (!isGameComplete()) {
        console.error('O jogo nao esta completo.')
        return
    }
    state.savedGames.push(state.currentGame)
}

function isGameComplete() {
    return state.currentGame.length === 6
}

function resetGame() {
    state.currentGame = []
}

start()