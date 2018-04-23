describe("Game", function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
    frame = jasmine.createSpy('frame');
  })

  describe("When first created", function() {
    it("should have a frames array that starts as empty", function() {
      expect(game.frames).toEqual([]);
    });

    it("should have a frame index that starts at 1", function() {
      expect(game.frameIndex).toEqual(1);
    });

    it("should have a maximum of 10 frames", function() {
      expect(game._MAX_FRAMES).toEqual(10);
    });
  });
});
