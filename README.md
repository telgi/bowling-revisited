# Bowling Challenge Revisited

Using JavaScript and the Jasmine testing framework to test-drive development of
a bowling game.

## Aim

To approach design of the 10th frame differently, using a 'pending bonus' function.

## Installation

`git clone git@github.com:telgi/bowling-revisited.git`

## Testing

Run `open SpecRunner.html` to launch Jasmine test suite

## Features

### Basic Game (with no spares or strikes)

* There are 10 frames in a game []
* There are 10 pins to knock down in every frame []
* There are 2 rolls for every frame in which to knock down all 10 pins []
* The score of each frame is equal to the amount of pins knocked down []
* The final score is tallied by summing the points / pins of all frames []

### Gutter Game

* If you score 0 for every roll, you have achieved a 'Gutter Game' []

###

### Spares

* If a player knocks down a total of 10 pins over 2 bowls in a frame, they have made a spare []
* The total score of this frame is 10 points + the points of their next bowl (1st bowl of next frame) []

### Strikes

* If a player knocks down all 10 pins in their first bowl, they have made a strike []
* If this happens, they do not have a 2nd bowl []
* The total score of this frame is 10 points + the total points of the next 2 bowls (next frame) []
  * If a player rolls consecutive strikes, the earlier frame score will need to span over the next 2 frames to calculate the score (the next frame strike and the 1st bowl of the frame after) []

### 10th Frame

* If no spare or strike is made, the 10th frame will be calculated as normal (total pins from 2 bowls), and the game will end with a final total []
* If you score a spare, you will have a third additional roll as a bonus to complete your 10th frame score, and the game will end with a final total []
* If you score a strike, you will have a second and third additional roll as a bonus to complete your 10th frame score, and the game will end with a final total []
  * The 10th frame cannot have more than 3 bowls []

### Perfect Game

* If you score a strike in every available roll (12 - 10 regular and 2 bonus in the 10th frame), you have achieved a 'Perfect Game' of 300 points []
