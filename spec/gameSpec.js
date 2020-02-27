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
  var board = {
    board: [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']],
    isFull: () => false
    }

  beforeEach(function() {
    game = new Game(playerOne, playerTwo, board);
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
  
  describe('board', function() {
    it('should have a board', function() {
      expect(game.board).toBeInstanceOf(Array)
    })
  })

  describe('selectPlayer', function() {
    it('first turn is playerOne turn', function() {
      expect(game.selectPlayer()).toEqual(playerOne)
    })

    it('second turn is playerTwo turn', function() {
      game.changeTurn()
      expect(game.selectPlayer()).toEqual(playerTwo)
    })
  })

  describe('insertMove', function() {
    it('let you insert a move as the correct player', function() {
      expect(game.insertMove(0, 0)).toEqual('X')
      expect(game.insertMove(0, 1)).toEqual('O')
      expect(game.insertMove(1, 0)).toEqual('X')
    })

    it('throw an error if inserting a move in a not empty space', function() {
      game.insertMove(2, 2)
      expect( function() {
        game.insertMove(2, 2)
      }).toThrowError('Space filled')
    })
  })
});