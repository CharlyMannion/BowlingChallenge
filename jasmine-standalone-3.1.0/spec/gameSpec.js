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
    it("should add the all the scores for each frame", function (){
      game.scoreCard = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
      expect(game.score()).toEqual(20);
    });
  });

  describe("bowl a ball", function(){
    it("bowling a ball should add a number to the game'\s scoreCard", function(){
      // game = new Game
      console.log(game)
      var rollOneScore = 6
      game.bowlBall(rollOneScore)
      console.log(game.scoreCard)
      console.log(game)
      expect(game.scoreCard).toContain(6)
    });
  });

});
