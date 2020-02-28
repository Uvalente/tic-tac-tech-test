class Rule {
  constructor() {
    this._winner = undefined;
    this.checkWinner = (sign, index, array) => array[0] && sign === array[0];
    this.columnSelector = (board) => {
      const columns = [[], [], []];
      board.forEach((row) => {
        columns[0].push(row[0]);
        columns[1].push(row[1]);
        columns[2].push(row[2]);
      });
      return columns;
    };
    this.diagonalSelector = (board) => {
      const diagonalOne = [board[0][0], board[1][1], board[2][2]];
      const diagonalTwo = [board[0][2], board[1][1], board[2][0]];
      const diagonals = [diagonalOne, diagonalTwo];
      return diagonals;
    };
  }

  winner(board) {
    const columns = this.columnSelector(board);
    const diagonals = this.diagonalSelector(board);
    const combinations = [board, columns, diagonals].flat();
    combinations.forEach((combination) => {
      if (combination.every(this.checkWinner)) [this._winner] = combination;
    });
    return this._winner;
  }
}

module.exports = Rule;
