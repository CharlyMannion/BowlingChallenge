"use strict";

describe("Game", function(){
  var game

  beforeEach(function(){
    game = new Game();
  });

  it("should have a score card", function() {
    expect(game.scoreCard).toEqual([]);
  });

  describe("game score", function(){
    it("should total zero if no pins were knocked down throughout the game", function(){
      game.scoreCard = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(game.score()).toEqual(0);
    });
  });

});
