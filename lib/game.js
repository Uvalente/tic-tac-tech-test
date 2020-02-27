const Rule = require('./rule');
const Board = require('./board');
const Player = require('./player');


class Game {
  constructor(playerOne = new Player('Player 1', 'X'),
    playerTwo = new Player('Player 2', 'O'),
    board = new Board().board,
    rule = new Rule()) {
    this._turn = 0;
    this._players = [playerOne, playerTwo];
    this._board = board;
    this._rule = rule;
    this._winner = undefined;
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

  winner() {
    const sign = this._rule.winner(this._board);
    if (sign) this._winner = sign === this.playerOne.sign ? this.playerOne : this.playerTwo;
    return this._winner;
  }

  insertMove(row, column) {
    if (this._winner) throw new Error('The game is over');
    if (this._board[row][column]) throw new Error('Space filled');

    this._board[row][column] = this.selectPlayer().sign;
    if (this.winner()) {
      return `${this._winner.name} wins!`;
    }
    this.changeTurn();
    return this._board[row][column];
  }
}


module.exports = Game;
