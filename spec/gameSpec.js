describe('Game', function() {
  var Game = require('../lib/game');
  var game;
  var playerOne = {
    name: 'Player 1',
    sign: 'X'
  }

  beforeEach(function() {
    game = new Game(playerOne);
  });

  describe('turn', function() {
    it('should have a turn starting at 0', function() {
      expect(game.turn).toEqual(0);
    });
  
    it('can increment turn', function() {
      expect(game.changeTurn()).toEqual(1);
    });
  });

  describe('player', function() {
    it('should have a player', function() {
      expect(game.playerOne).toEqual(playerOne)
      expect(game.playerOne.name).toEqual('Player 1')
      expect(game.playerOne.sign).toEqual('X')
    });
  });
  
});