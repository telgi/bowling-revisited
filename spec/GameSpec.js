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
  });
});
