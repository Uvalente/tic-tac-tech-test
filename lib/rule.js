class Rule {
  constructor() {
    this.rowWinner = (sign) => sign === 'X' || sign === 'O';
  }

  winner(board) {
    let winner;
    board.forEach((row) => {
      if (row.every(this.rowWinner)) [winner] = row;
    });
    return winner;
  }
}

module.exports = Rule;
