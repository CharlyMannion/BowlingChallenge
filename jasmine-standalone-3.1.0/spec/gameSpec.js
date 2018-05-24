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
    it("should return 300 if the player rolls 12 strikes", function (){
      var times = 12;
      for(var i=0; i < times; i++){
        game.bowlBall(10)
      }
      expect(game.score()).toEqual(300)
    });
  });

  describe("bowling balls with basic scores", function(){
    it("bowling the first ball should add a number to the game'\s scoreCard", function(){
      var rollOneScore = 6
      game.bowlBall(rollOneScore)
      expect(game.scoreCard).toContain(6)
    });
    it("should add multiple balls to the game'\s scoreCard", function(){
      var times = 20;
      for(var i=0; i < times; i++){
        game.bowlBall(2)
      }
      expect(game.scoreCard).toEqual([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2])
    });
    // it("should not allow a 21st role of the ball if the 19th ball is a basic score", )
    // it("should end the game after 20 roles of the ball for a basic scoring game", )
    // it("should give the game score after 20 roles of a basic scoring game", )
  });

});
