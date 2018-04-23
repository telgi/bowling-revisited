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

  describe("Basic Roll", function() {
    it("should add amount of pins to the current frame's rolls array", function() {
      game.roll(5);
      expect(game.currentFrame.rolls).toContain(5);
    });
  });
});
