"use strict";

describe("Game", function(){
  var game

  beforeEach(function(){
    game = new Game();
  });

  it("should have a score card", function() {
    expect(game.scoreCard).toEqual([]);
  });

});
