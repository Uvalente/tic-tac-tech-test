class Game {
  constructor(playerOne, playerTwo, board) {
    this._turn = 0;
    this._playerOne = playerOne;
    this._playerTwo = playerTwo;
    this._board = board;
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

  get board() {
    return this._board;
  }

  changeTurn() {
    this._turn += 1;
    return this.turn;
  }
}

module.exports = Game;
