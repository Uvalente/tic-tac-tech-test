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
      expect(game.insertMove(0,0)).toEqual('X')
      expect(game.insertMove(0,1)).toEqual('O')
    })
  })

})