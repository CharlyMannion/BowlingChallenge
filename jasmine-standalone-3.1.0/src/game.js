"use strict";

function Game() {

  this.scoreCard = []
}

Game.prototype.score = function(scoreCard) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  var sum = (this.scoreCard.reduce(reducer));
  return sum
}
