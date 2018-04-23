function Frame() {
  this.rolls = [];
  this.rollIndex = 1;
  this._MAX_PINS = 10;
}

Frame.prototype.addRoll = function (pins) {
  this.rolls.push(pins);
};
