describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  })

  describe("When first created", function() {
    it("should have a frames array that starts as empty", function() {
      expect(game.frames).toEqual([]);
    });
  });
});
