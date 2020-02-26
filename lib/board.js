class Board {
  constructor() {
    this._board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']];
  }

  get board() {
    return this._board;
  }
}

module.exports = Board;
