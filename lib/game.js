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
    return this.turn;
  }

  selectPlayer() {
    const player = this.turn % 2;
    return this._players[player];
  }

  insertMove(row, column) {
    if (this._board[row][column]) throw new Error('Space filled');

    this._board[row][column] = this.selectPlayer().sign;
    return this._board[row][column];
  }
}

module.exports = Game;
