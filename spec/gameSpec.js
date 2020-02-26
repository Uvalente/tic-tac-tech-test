describe('Game', function() {
  var Game = require('../lib/game');
  var game;
  var playerOne = {
    name: 'Player 1',
    sign: 'X'
  }
  var playerTwo = {
    name: 'Player 2',
    sign: 'O'
  }

  beforeEach(function() {
    game = new Game(playerOne, playerTwo);
  });

  describe('turn', function() {
    it('should have a turn starting at 0', function() {
      expect(game.turn).toEqual(0);
    });
  
    it('can increment turn', function() {
      expect(game.changeTurn()).toEqual(1);
    });
  });

  describe('players', function() {
    it('should have a playerOne', function() {
      expect(game.playerOne).toEqual(playerOne)
      expect(game.playerOne.name).toEqual('Player 1')
      expect(game.playerOne.sign).toEqual('X')
    });

    it('should have a playerTwo', function() {
      expect(game.playerTwo).toEqual(playerTwo)
      expect(game.playerTwo.name).toEqual('Player 2')
      expect(game.playerTwo.sign).toEqual('O')
    });
  });
  
});