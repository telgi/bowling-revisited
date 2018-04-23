function Game() {
  this.frames = [];
  this.currentFrame = new Frame();
  this.frameIndex = 1;
  this.addFrame();
  this._MAX_FRAMES = 10;
}

Game.prototype.roll = function (pins) {
  this.currentFrame.rolls.push(pins);
};

Game.prototype.addFrame = function () {
  this.frames.push(this.currentFrame);
};
