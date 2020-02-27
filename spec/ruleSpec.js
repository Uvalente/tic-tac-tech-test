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

    it('declare a winner if a row has three equal O', function() {
      board = [
        ['X', '', 'X'],
        ['O', 'O', 'O'],
        ['', '', '']]

      expect(rule.winner(board)).toEqual('O')
    })

    it('declare a winner if a row has three equal O', function() {
      board = [
        ['X', '', 'X'],
        ['O', '', 'O'],
        ['X', 'X', 'X']]

      expect(rule.winner(board)).toEqual('X')
    })
  })
  
  describe('column wins', function() {
    it('declare a winner if a column has three equal X', function() {
      board = [
        ['X', '', 'X'],
        ['X', '', 'O'],
        ['X', '', '']]
      
      expect(rule.winner(board)).toEqual('X')
    })
  
    it('declare a winner if a column has three equal )', function() {
      board = [
        ['X', '', 'O'],
        ['', '', 'O'],
        ['X', '', 'O']]
      
      expect(rule.winner(board)).toEqual('O')
    })

    it('declare a winner if a column has three equal )', function() {
      board = [
        ['X', 'X', 'O'],
        ['', 'X', ''],
        ['X', 'X', 'O']]
      
      expect(rule.winner(board)).toEqual('X')
    })
  })
})