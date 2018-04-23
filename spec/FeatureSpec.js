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
  });
});
