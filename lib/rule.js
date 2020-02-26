class Rule {
  constructor() {
    this.rowWinner = (sign) => sign === 'X' || sign === 'O';
    this.columnWinner = (board) => {
      const columns = [[], [], []];
      board.forEach((row) => {
        columns[0].push(row[0]);
        columns[1].push(row[1]);
        columns[2].push(row[2]);
      });
      return columns;
    };
  }

  winner(board) {
    let winner;
    board.forEach((row) => {
      if (row.every(this.rowWinner)) [winner] = row;
    });
    let columns = this.columnWinner(board);
    columns.forEach((column) => {
      if (column.every(this.rowWinner)) [winner] = column;
    });
    return winner;
  }
}

module.exports = Rule;


// for (let i = 0; i < 3; i += 1) {
//   for (let j = 0; j < 3; j += 1) {
//     console.log('iteration i j sign', i, j, board[i][j]);
//   }
// }
