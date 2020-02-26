describe('Board', function() {
  var Board = require('../lib/board');
  var board;

  beforeEach(function() {
    board = new Board();
  });

  it('should have 3 rows and 3 column', function() {
    expect(board.board.length).toEqual(3)
    expect(board.board[0].length).toEqual(3)
  });
});