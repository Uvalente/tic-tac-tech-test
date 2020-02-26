class Game {
  constructor() {
    this._turn = 0;
  }

  get turn() {
    return this._turn;
  }

  changeTurn() {
    this._turn += 1;
    return this.turn;
  }
}

module.exports = Game;
