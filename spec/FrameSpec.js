describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("When Frame is first created", function() {
    it("should have a rolls array that starts as empty", function() {
      expect(frame.rolls).toEqual([]);
    });

    it("should have a roll index that starts at 1", function() {
      expect(frame.rollIndex).toEqual(1);
    });

    it("should have a maximum of 10 pins to knock down", function() {
      expect(frame._MAX_PINS).toEqual(10);
    });
  });

  describe("addRoll", function() {
    it("should add the amount of pins knocked down for every roll", function() {
      frame.addRoll(5);
      expect(frame.rolls).toContain(5)
    });
  });
});
