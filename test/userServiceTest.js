var assert = require("assert");
const sayHello = require("../services/userService");

describe("userService", function() {
  describe("sayHello", function() {
    it("should return Helloo + message", function() {
      assert.equal(sayHello("wassim"), "Helloo wassim");
    });
  });
});
