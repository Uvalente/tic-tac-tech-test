describe("Player", function() {
  var Player = require('../lib/player');
  var player;

  beforeEach(function() {
    player = new Player('Player 1', 'X');
  });

  it("should have a name", function() {
    expect(player.name).toEqual('Player 1');
  });

  it("should have a sign", function() {
    expect(player.sign).toEqual('X');
  });
});
