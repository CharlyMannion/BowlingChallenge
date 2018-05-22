"use strict";

function Game() {

  this.scoreCard = []
}

Game.prototype.createFrameOne = function(frameClass = Frame()) {
  this.frameOne = new frameClass
}
