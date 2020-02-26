class Game {
  constructor(playerOne, playerTwo, board) {
    this._turn = 0;
    this._players = [playerOne, playerTwo];
    this._board = board;
  }

  get turn() {
    return this._turn;
  }

  get playerOne() {
    return this._players[0];
  }

  get playerTwo() {
    return this._players[1];
  }

  get board() {
    return this._board;
  }

  changeTurn() {
    this._turn += 1;
    const player = this.turn % 2;
    return this._players[player];
  }
}

module.exports = Game;
