describe('Features', function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  describe("Start of Game", function() {
    it("should set the current frame to a new frame", function() {
      expect(game.currentFrame).toEqual(frame);
    });

    it("should add the first frame to the frames array", function() {
      expect(game.frames).toContain(frame);
    });
  });

  describe("When 1st roll is not a strike", function() {
    beforeEach(function() {
      game.roll(5);
    });

    it("should add amount of pins to the current frame's rolls array", function() {
      expect(game.currentFrame.rolls).toContain(5);
    });

    it("should increment the roll index by 1", function() {
      expect(game.currentFrame.rollIndex).toEqual(2);
    });
  });

  describe("When 2nd roll is not a spare", function() {
    beforeEach(function() {
      game.roll(3);
      game.roll(3);
    });

    it("should create a new frame in the frames array", function() {
      expect(game.frames.length).toEqual(2);
    });

    it("should set the roll index to 1", function() {
      expect(game.currentFrame.rollIndex).toEqual(1);
    });
  });
});
