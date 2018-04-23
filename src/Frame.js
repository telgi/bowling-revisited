function Frame() {
  this.rolls = [];
  this.rollIndex = 1;
  this._MAX_PINS = 10;
}

Frame.prototype.roll = function (pins) {
  this._addRoll(pins);
  this._nextRoll();
};

Frame.prototype._addRoll = function (pins) {
  this.rolls.push(pins);
};

Frame.prototype._nextRoll = function () {
  this.rollIndex++;
};
