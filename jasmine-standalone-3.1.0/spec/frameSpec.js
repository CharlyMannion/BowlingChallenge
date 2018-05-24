// "use strict";
// describe("Frame", function(){
//   var frame
//
//   beforeEach(function(){
//     frame = new Frame();
//   });
//
//   describe("frame score card", function(){
//     it("should have an empty score card at the start of the frame", function() {
//       expect(frame.frameScoreCard).toEqual([]);
//     });
//   });
//
//   describe("roll one", function() {
//     it("adds the score for roll one to the frame\'s scorecard", function(){
//       var rollOneScore = 6
//       frame.rollOne(rollOneScore)
//       expect(frame.frameScoreCard).toContain(6)
//     });
//   });
//
//   describe("roll two", function() {
//     it("adds the score for roll two to the frame\'s scorecard", function(){
//       var rollOneScore = 6
//       frame.rollOne(rollOneScore)
//       var rollTwoScore = 2
//       frame.rollTwo(rollTwoScore)
//       expect(frame.frameScoreCard).toEqual([6, 2])
//     });
//   });
//
//   describe("frame score", function(){
//     it("should be the total of the rollOneScore and rollTwoScore", function(){
//       frame.frameScoreCard = [6, 2]
//       expect(frame.frameScore()).toEqual(8)
//     });
//     // it("should not be more than 10", function() {
//     //   expect(frame.frameScore() <= 10).toBeTruthy();
//     // });
//   });
//
// });
