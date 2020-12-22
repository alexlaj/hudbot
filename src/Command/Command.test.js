const Command = require("./Command");

describe("Command", () => {
  describe("replyable", () => {
    it("returns true when the message addresses the bot", () => {
      cmd = new Command("hudbot do something");

      expect(cmd.isReplyable()).toBe(true);
    });

    it("returns false when the message does not address the bot", () => {
      cmd = new Command("do something hudbot");

      expect(cmd.isReplyable()).toBe(false);
    });
  });

  describe("requiresPlease", () => {
    it("returns true if the caller is rude", () => {
      cmd = new Command("hudbot add");

      expect(cmd.requiresPlease()).toBe(true);
    });

    it("returns false if the caller is nice", () => {
      cmd = new Command("hudbot please add");

      expect(cmd.requiresPlease()).toBe(false);
    });
  });

  describe("parameterizedCommand", () => {});

  describe("perform", () => {});
});
