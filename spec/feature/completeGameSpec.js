describe('Complete Game', function() {
  var Game = require('../../lib/game');

  var game;
  var playerOne;
  var playerTwo;

  beforeEach(function() {
    game = new Game()
  })

  describe('players turns', function() {
    it('players are alternating turns', function() {
      expect(game.insertMove(0, 0)).toEqual('X')
      expect(game.insertMove(0, 1)).toEqual('O')
    })
  })

  describe('inserting error', function() {
    it('player can not insert in a filled spot', function() {
      game.insertMove(0, 0)
      expect( function() {
        game.insertMove(0, 0)
      }).toThrowError('Space filled')
    })
  })

  describe('declare winner', function() {
    it('declare a winner and stop the game', function() {
      game.insertMove(0, 0)
      game.insertMove(1, 0)
      game.insertMove(0, 1)
      game.insertMove(1, 1)
      expect(game.insertMove(0, 2)).toEqual('Player 1 wins!')
      expect( function() {
        game.insertMove(1, 2)
      }).toThrowError('The game is over')
    })
  })

  describe('no winner', function() {
    it('declare game over if there are no free spaces nor winner', function() {
      game.insertMove(0, 0)
      game.insertMove(0, 1)
      game.insertMove(0, 2)
      game.insertMove(1, 1)
      game.insertMove(1, 0)
      game.insertMove(1, 2)
      game.insertMove(2, 1)
      game.insertMove(2, 0)
      game.insertMove(2, 2)
      expect( function() {
        game.insertMove(0, 0)
      }).toThrowError('The game is over')
    })
  })

})