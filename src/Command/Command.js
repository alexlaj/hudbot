class Command {
  static BOT_NAME = "hudbot";
  static PREFIX = `${Command.BOT_NAME} please`;
  static ADD = "add";
  static REMOVE = "remove";
  static LIST = "list";

  constructor(message) {
    this.message = message;
  }

  isReplyable() {
    return this.message.startsWith(Command.BOT_NAME);
  }

  requiresPlease() {
    return (
      this.message.startsWith(Command.BOT_NAME) &&
      !this.message.startsWith(Command.PREFIX)
    );
  }

  parameterizedCommand() {
    const regex = `^${Command.PREFIX} (add|remove|list) .+`;
    return {
      verb: this.message.match(regex)[1],
      item: this.message.match(regex)[2],
    };
  }
}

module.exports = Command;
