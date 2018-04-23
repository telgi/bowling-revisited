describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("When Frame is first created", function() {
    it("should have a rolls array that starts as empty", function() {
      expect(frame.rolls).toEqual([]);
    });
  });
});
