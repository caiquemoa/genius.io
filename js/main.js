import { Game } from './game.js'
const game = new Game()

// random Math.floor(Math.random() * 4)

const gameStatus = document.getElementById('gameStatus')
const playGame = document.getElementById('startGame')

let playTime = false
let clickTime = 200

gameStatus.addEventListener('click', () => {
  gameTurn.style.color = '#ffeaf2'
  playerTurn.style.color = '#ffeaf2'
  playTime = true
})

playGame.addEventListener('click', () => {
  if (gameStatus.checked && playTime) {
    playerTurn.style.color = '#ffeaf2'
    game.runColors()
    playTime = false
  }
})

game.pads[0].addEventListener('click', () => {
  game.blinkTurn(clickTime, 'player', 0)
  game.checkOrder(0)
})

game.pads[1].addEventListener('click', () => {
  game.blinkTurn(clickTime, 'player', 1)
  game.checkOrder(1)
})

game.pads[2].addEventListener('click', () => {
  game.blinkTurn(clickTime, 'player', 2)
  game.checkOrder(2)
})

game.pads[3].addEventListener('click', () => {
  game.blinkTurn(clickTime, 'player', 3)
  game.checkOrder(3)
})
