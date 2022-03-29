export class Game {
  constructor() {
    this.delay = ms => new Promise(res => setTimeout(res, ms))
    this.canClick = false
    this.gameColorOrder = []
    this.index = 0
    this.counter = 0
    this.playerTurn = document.getElementById('playerTurn')
    this.gameTurn = document.getElementById('gameTurn')
    this.selectedColor = document.getElementById('genius4')
    this.hiddenColor = '#ffeaf2'
    this.showColor = '#4dff1f'
    this.pads = document.querySelectorAll('.color-pads')
  }

  checkOrder(click) {
    if (this.canClick) {
      if (click != this.gameColorOrder[this.index]) {
        this.gameTurn.style.color = this.hiddenColor
        this.playerTurn.style.color = this.hiddenColor
        this.gameColorOrder = []
        gameStatus.checked = false
        this.counter = 0
        this.canClick = false
        setTimeout(() => {
          alert('you lost')
        }, 300)
        return
      }

      this.index++

      if (this.index == this.gameColorOrder.length) {
        this.index = 0
        this.counter++
        scoreCounter.textContent = this.counter.toString().padStart(2, '0')
        this.canClick = false
        this.playerTurn.style.color = this.hiddenColor
        setTimeout(() => {
          this.runColors()
        }, 1000)
      }
    }
  }

  async runColors() {
    const orderTime = 600 //ms
    this.gameTurn.style.color = this.showColor
    this.gameColorOrder.push(Math.floor(Math.random() * 4))
    this.blinkTurn(orderTime, 'game')
    this.gameTurn.style.color = this.hiddenColor
    this.playerTurn.style.color = this.showColor
    this.canClick = true
  }

  async blinkTurn(time, turn, color = 0) {
    if (turn == 'game') {
      for (let i = 0; i < this.gameColorOrder.length; i++) {
        this.blink(this.gameColorOrder[i])
        await this.delay(time)
        this.blink(this.gameColorOrder[i], true)
        await this.delay(time)
      }
      return
    }

    if (turn == 'player') {
      this.blink(color)
      await this.delay(time)
      this.blink(color, true)
      return
    }
  }

  blink(cor, isPreviousColor = false) {
    let colorPad = this.pads[cor]

    if (isPreviousColor == true) {
      colorPad.classList.remove('--active')
    } else colorPad.classList.add('--active')
  }
}
