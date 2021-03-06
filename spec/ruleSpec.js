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

    it('declare a winner if a row has three equal X', function() {
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
  
    it('declare a winner if a column has three equal O', function() {
      board = [
        ['X', '', 'O'],
        ['', '', 'O'],
        ['X', '', 'O']]
      
      expect(rule.winner(board)).toEqual('O')
    })

    it('declare a winner if a column has three equal X', function() {
      board = [
        ['X', 'X', 'O'],
        ['', 'X', ''],
        ['X', 'X', 'O']]
      
      expect(rule.winner(board)).toEqual('X')
    })
  })

  describe('diagonal wins', function() {
    it('declare a winner if first diagonal has three equal X', function() {
      board = [
        ['X', 'X', 'O'],
        ['', 'X', ''],
        ['X', 'O', 'X']]
  
        expect(rule.winner(board)).toEqual('X')
    })

    it('declare a winner if second diagonal has three equal O', function() {
      board = [
        ['X', 'X', 'O'],
        ['', 'O', ''],
        ['O', 'O', 'X']]
  
        expect(rule.winner(board)).toEqual('O')
    })
  })

  describe('no wins', function() {
    it('does not have a winner on an empty board', function() {
      board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']]

        expect(rule.winner(board)).toBeUndefined()
    })
  })
})