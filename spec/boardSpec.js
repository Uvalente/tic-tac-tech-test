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

  describe('isFull', function() {
    it('return false when the board is not full', function() {
      expect(board.isFull()).toBeFalse()
    })

    it('return true when the board is full', function() {
      board._board = [
        ['X', 'X', 'X'],
        ['X', 'X', 'X'],
        ['X', 'X', 'X']]
      
      expect(board.isFull()).toBeTrue()
    })
  });
});