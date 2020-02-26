describe('Rule', function() {
  var Rule = require('../lib/rule');
  var rule;
  var board
  beforeEach(function() {
    rule = new Rule();
  });

  describe('row wins', function() {
    it('declare a winner if a row has three equal X', function() {
      board = [
        ['X', 'X', 'X'],
        ['', '', ''],
        ['', '', '']]
    
      expect(rule.winner(board)).toEqual('X')
    })
  })
})