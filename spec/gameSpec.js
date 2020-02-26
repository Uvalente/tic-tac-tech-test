describe('Game', function() {
  var Game = require('../lib/game');
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('should have a turn starting at 0', function() {
    expect(game.turn).toEqual(0);
  });
});