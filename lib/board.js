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

  isFull() {
    return this._board.flat().every((sign) => sign);
  }
}

module.exports = Board;
