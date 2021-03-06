describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  })

  describe("When first created", function() {
    it("should have a frame index that starts at 1", function() {
      expect(game.frameIndex).toEqual(1);
    });

    it("should have a maximum of 10 frames", function() {
      expect(game._MAX_FRAMES).toEqual(10);
    });
  });
});
