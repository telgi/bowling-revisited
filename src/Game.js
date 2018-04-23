function Game() {
  this.frames = [];
  this.currentFrame = new Frame();
  this.frameIndex = 1;
  this._addFrame();
  this._MAX_FRAMES = 10;
}

Game.prototype.roll = function (pins) {
  this.currentFrame.roll(pins);
  if (this.currentFrame.rollIndex > 2) {
    this._nextFrame();
  }
};

Game.prototype._addFrame = function () {
  this.frames.push(this.currentFrame);
};

Game.prototype._nextFrame = function () {
  this.currentFrame = new Frame();
  this._addFrame();
};
