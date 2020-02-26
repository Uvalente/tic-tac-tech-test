class Game {
  constructor(playerOne, playerTwo) {
    this._turn = 0;
    this._playerOne = playerOne;
    this._playerTwo = playerTwo;
  }

  get turn() {
    return this._turn;
  }

  get playerOne() {
    return this._playerOne;
  }

  get playerTwo() {
    return this._playerTwo;
  }

  changeTurn() {
    this._turn += 1;
    return this.turn;
  }
}

module.exports = Game;
