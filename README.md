
Bowling Challenge
=================

This challenge was to count and sum the scores of a bowling game for one player (in JavaScript).

```
## User Stories

As a player,
to start a game bowling,
I want to play a frame.

As a player,
to play a frame of bowling,
I want to have have a starting score of 0.

As a player,
to play a frame of bowling,
I want to have two rolls per frame.

As a player,
to play a frame of bowling,
I want to have one roll per frame if I roll a strike on my first roll.

As a player,
to play a frame of bowling,
I want to get a maximum score of 10 per frame.

As a player,
to play a full game of bowling,
I want to play for 10 frames.

As a player,
to play a full game of bowling,
I want to have a total score for my game.

As a player,
to keep track of my game,
I want to see my score at the end of each frame.

As a player,
to get a bonus for a strike,
I want the value of my next two rolls (from the following 1 or 2 frames) to be added to my score for the frame where I got a strike.

As a player,
to get a bonus for a spare,
I want the value of my next roll (from the next frame) to be added to my score for the spare frame.

As a player,
to get a bonus on my final frame if I get a strike or a spare,
I want to have an extra roll in the final frame.

As a player,
if I knock down no pins in the entire game,
I want to see a Gutter Game message.

As a player,
if I get 12 strikes in my game,
I want to see a Perfect Game message.
```

## Bowling Rules

### Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

### Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

### 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

### Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

### Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)
