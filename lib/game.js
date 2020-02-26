class Game {
  constructor() {
    this._turn = 0;
  }

  get turn() {
    return this._turn;
  }
}

module.exports = Game;
