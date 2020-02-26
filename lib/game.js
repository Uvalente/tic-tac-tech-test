class Game {
  constructor(playerOne) {
    this._turn = 0;
    this._playerOne = playerOne;
  }

  get turn() {
    return this._turn;
  }

  get playerOne() {
    return this._playerOne;
  }

  changeTurn() {
    this._turn += 1;
    return this.turn;
  }
}

module.exports = Game;
