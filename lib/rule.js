class Rule {
  constructor() {
    this._winner = undefined;
    this.checkWinner = (sign) => sign === 'X' || sign === 'O';
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
      const diagonals = [diagonalOne];
      return diagonals;
    };
  }

  winner(board) {
    board.forEach((row) => {
      if (row.every(this.checkWinner)) [this._winner] = row;
    });
    const columns = this.columnSelector(board);
    columns.forEach((column) => {
      if (column.every(this.checkWinner)) [this._winner] = column;
    });
    const diagonals = this.diagonalSelector(board);
    diagonals.forEach((diagonal) => {
      if (diagonal.every(this.checkWinner)) [this._winner] = diagonal;
    });
    return this._winner;
  }
}

module.exports = Rule;


// for (let i = 0; i < 3; i += 1) {
//   for (let j = 0; j < 3; j += 1) {
//     console.log('iteration i j sign', i, j, board[i][j]);
//   }
// }
