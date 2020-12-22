const { describe, it, expect } = require("@jest/globals");
const messageHandler = require("./messageHandler");

describe("messageHandler", () => {
  it("works", () => {
    const reply = jest.fn();
    messageHandler({ content: "hudbot add this", reply });
    expect(reply).toHaveBeenCalledWith("What's the magic word?");
  });
});
