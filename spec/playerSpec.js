describe("Player", function() {
  var Player = require('../lib/player');
  var player;

  beforeEach(function() {
    player = new Player('Player 1');
  });

  it("should be have a name", function() {
    expect(player.name).toEqual('Player 1');
  });
});
